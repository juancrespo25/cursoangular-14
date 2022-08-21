import { User, UserProperties } from "./user";

export class UserFactory {

    create(nombre: string, correo: string, password: string, roles: any[]): User {

        const userProperties: UserProperties = {
            nombre,
            correo,
            password,
            roles,
            id: new Date().getTime(),
        };

        if (nombre.trim() === "") {
            throw new Error("El nombre no puede ser vacio")
        }

        if (correo.trim() === "") {
            throw new Error("El correo no puede ser vacio")
        }

        if (roles.length === 0) {
            throw new Error("Debe de seleccionar al menos un rol")
        }

        return new User(userProperties);
    }
}