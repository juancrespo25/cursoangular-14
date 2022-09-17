import { Medic, MedicProperties } from "./medic";

export class MedicFactory {
    create(nombre: string, apellido: string, segundo_nombre: string, cmp: string, correo: string, dni: string, foto: string) {
        const MedicProperties: MedicProperties = {
            nombre,
            apellido,
            segundo_nombre,
            cmp,
            correo,
            dni,
            foto,
        };

        if (nombre.trim() === '') {
            throw new Error("nombre must not be empty");
        }
        if (apellido.trim() === '') {
            throw new Error("apellido must not be empty");
        }
        if (segundo_nombre.trim() === '') {
            throw new Error("segundo_nombre must not be empty");
        }
        if (cmp.trim() === '') {
            throw new Error("cmp must not be empty");
        }
        if (correo.trim() === '') {
            throw new Error("correo must not be empty");
        }
        if (dni.trim() === '') {
            throw new Error("dni must not be empty");
        }
        if (foto.trim() === '') {
            throw new Error("foto must not be empty");
        }

        return new Medic(MedicProperties)
    }
}