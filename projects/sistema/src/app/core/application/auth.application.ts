import { Inject, Injectable } from "@angular/core";
import { Auth } from "../domain/auth";
import { AuthRepository } from "../domain/auth.repository";
import { ITokens } from "../domain/tokens.interface";
import { AuthInfrastructure } from "../infrastructure/auth.infrastructure";
import { StorageApplication } from "./storage.application";
import { Router } from '@angular/router';
import { Observable, throwError } from "rxjs";
import { UtilsService } from "../../shared/service/utils.service";

@Injectable()
export class AuthApplication {

    private userLogged = false;
    constructor(
        private readonly router: Router,
        @Inject(AuthInfrastructure) private readonly authRepository: AuthRepository,
        private readonly storageApplication: StorageApplication,
        private utilService: UtilsService) { }

    login(auth: Auth) {
        return this.authRepository.login(auth).subscribe({
            next: this.userAuthenticated.bind(this),
            error: this.showMessageError.bind(this),
        })
    }

    private userAuthenticated(response: ITokens) {
        this.storageApplication.setField('accessToken', response.accessToken)
        this.storageApplication.setField('refreshToken', response.refreshToken)
        this.userLogged = true;
        this.router.navigate(['/dashboard'])
    }

    private showMessageError(error: any) {
        this.utilService.showNotification("Credenciales invalidas");
    }

    get isUserLogged(): boolean {
        const accessToken = this.storageApplication.getField('accessToken');
        const refreshToken = this.storageApplication.getField('refreshToken');

        return (!!accessToken && !!refreshToken) || this.userLogged ? true : false;
    }

    logout() {
        this.userLogged = false;
        this.storageApplication.clear();
        this.router.navigate(['/']);
    }

    getNewAccessToken(refreshToken: string): Observable<ITokens> {
        return this.authRepository.getNewAccessToken(refreshToken);
    }


}