import { Driver, DriverProperties } from "./driver";

export class DriverFactory {
    create(nombre: string) {
        const DriverProperties: DriverProperties = {
            nombre
        };

        if (nombre.trim() === '') {
            throw new Error("nombre must not be empty");
        }
        return new Driver(DriverProperties)
    }
}