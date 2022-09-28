import { Role } from "./role";

export class RoleFactory {
    create(rol: string) {
        if (rol.trim() === '') {
            throw new Error('Rol no puede ser vacio')
        }
        return new Role({ rol });
    }
}