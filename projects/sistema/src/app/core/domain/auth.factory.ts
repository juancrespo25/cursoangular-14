import { Auth, AuthProperties } from "./auth";

export class AuthFactory {
    static create(correo: string, password: string): Auth {

        const recaptchaReactive = 'abc'

        const authProperties: AuthProperties = {
            correo,
            password,
            recaptchaReactive
        };

        if (correo.trim() === '') {
            throw new Error("correo must not be empty");
        }

        if (password.trim() === '') {
            throw new Error("password must not be empty");
        }

        return new Auth(authProperties);
    }
}