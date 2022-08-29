import { Observable } from "rxjs";
import { Auth } from "./auth";
import { ITokens } from "./tokens.interface";

export interface AuthRepository {
    login(auth: Auth): Observable<any>;
    getNewAccessToken(refreshToken: string): Observable<ITokens>;
}