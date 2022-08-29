export interface AuthRequired {
    correo: string;
    password: string;
}

export interface AuthOptional {
    recaptchaReactive: string;
}

export type AuthProperties = Required<AuthRequired> & Required<AuthOptional>

export class Auth {
    private readonly correo: string;
    private readonly password: string;
    private readonly recaptchaReactive: string;

    constructor(properties: AuthProperties) {
        Object.assign(this, properties);
    }

    properties(): AuthProperties {
        return {
            correo: this.correo,
            password: this.password,
            recaptchaReactive: this.recaptchaReactive
        }
    }
}