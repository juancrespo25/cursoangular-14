export interface DriverRequired {
    nombre: string;
}

export interface DriverOpcional {
    id: number;
    activo: boolean
}

export type DriverProperties = Required<DriverRequired> & Partial<DriverOpcional>

export type DriverUpdate = Partial<{
    nombre: string;
}>

export class Driver {
    private readonly id: number;
    private nombre: string;
    private activo: boolean;

    constructor(properties: DriverProperties) {
        this.activo = true;
        Object.assign(this, properties);
    }

    properties(): DriverProperties {
        return {
            id: this.id,
            nombre: this.nombre,
            activo: this.activo
        }
    }

    update(fields: DriverUpdate) {
        Object.assign(this, fields);
    }

    delete() {
        this.activo = false;
    }
}