export interface UserRequired {
    nombre: string;
    correo: string;
    password: string;
    roles: any;
}

export interface UserOpcional {
    id: number;
    activo: boolean;

}

export type UserProperties = Required<UserRequired> & Partial<UserOpcional>

export type UserUpdate = Partial<{
    nombre: string;
    password: string;
    roles: any;
}>

export class User {
    private readonly id: number;
    private nombre: string;
    private readonly correo: string;
    private password: string;
    private activo: boolean;
    private roles: any;

    constructor(properties: UserProperties) {
        this.activo = true;
        Object.assign(this, properties);
    }

    properties(): UserProperties {
        return {
            id: this.id,
            nombre: this.nombre,
            correo: this.correo,
            password: this.password,
            activo: this.activo,
            roles: this.roles
        }
    }
    update(fields: UserUpdate) {
        Object.assign(this, fields);
    }

    delete() {
        this.activo = false;
    }

}