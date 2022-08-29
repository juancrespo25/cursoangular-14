import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "projects/sistema/src/environments/environment";
import { Observable } from "rxjs";
import { Auth } from "../domain/auth";
import { AuthRepository } from "../domain/auth.repository";
import { ITokens } from "../domain/tokens.interface";

@Injectable()
export class AuthInfrastructure implements AuthRepository {

    constructor(private readonly http: HttpClient) {

    }
    login(auth: Auth): Observable<ITokens> {
        return this.http.post<ITokens>(`${environment.apiUrl}/users/login`, auth)
    }
    getNewAccessToken(refreshToken: string): Observable<ITokens> {
        throw new Error("Method not implemented.");
    }

}