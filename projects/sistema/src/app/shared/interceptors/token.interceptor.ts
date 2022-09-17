import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { catchError, mergeMap, Observable, retry, throwError } from "rxjs";
import { AuthApplication } from "../../core/application/auth.application";
import { StorageApplication } from "../../core/application/storage.application";
import { ITokens } from "../../core/domain/tokens.interface";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private readonly storage: StorageApplication,
        private readonly injector: Injector
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const accessToken = this.storage.getField('accessToken');
        const clonedRequest = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${accessToken}`),
        });

        return next.handle(clonedRequest).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = '';

                if (error.error instanceof ErrorEvent) {
                    // client-side error
                    errorMessage = `Error: ${error.error.message}`;
                } else {
                    // server-side error
                    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                    return this.handlerErrorBackend(error, req, next);
                }

                return throwError(() => new Error(errorMessage));
            })
        );
    }

    handlerErrorBackend(
        error: HttpErrorResponse,
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<any> {
        const auth = this.injector.get(AuthApplication);

        if (error.status === 409) {
            const refreshToken = this.storage.getField('refreshToken');

            return auth.getNewAccessToken(refreshToken).pipe(
                retry(3),
                mergeMap((tokens: ITokens) => {
                    this.storage.setField('accessToken', tokens.accessToken);
                    this.storage.setField('refreshToken', tokens.refreshToken);

                    const clonedRequest = req.clone({
                        headers: req.headers.append(
                            'Authorization',
                            `Bearer ${tokens.accessToken}`
                        ),
                    });

                    return next.handle(clonedRequest);
                })
            );
        } else if (error.status === 401) {
            auth.logout();
        }

        return throwError(() => new Error('Unauthorized'));
    }
}
