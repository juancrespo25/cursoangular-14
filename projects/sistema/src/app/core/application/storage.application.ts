import { Inject, Injectable } from "@angular/core";
import { StorageRepository } from "../domain/storage.repository";
import { StorageInfrastructure } from "../infrastructure/storage.infrastructure";

@Injectable()
export class StorageApplication {
    constructor(
        @Inject(StorageInfrastructure) private readonly storage: StorageRepository
    ) { }

    setField(property: string, value: string): void {
        this.storage.setStorage(property, value);
    }

    getField(property: string): string | null {
        return this.storage.getStorage(property);
    }

    getFieldToken(field: string): string | string[] | null {
        return this.storage.getFiledInToken(field);
    }

    clear(): void {
        this.storage.clear();
    }

}