import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StorageApplication } from "../../core/application/storage.application";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private readonly storage: StorageApplication) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const accessToken = this.storage.getField("accessToken");
        const clonedRequest = req.clone({ headers: req.headers.append('Authorization', `Bearer ${accessToken}`) });

        return next.handle(clonedRequest);
    }

}