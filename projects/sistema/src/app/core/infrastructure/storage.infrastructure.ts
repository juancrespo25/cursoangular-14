import { Injectable } from "@angular/core";
import { StorageRepository } from "../domain/storage.repository";
import jwtDecode from "jwt-decode";

@Injectable()
export class StorageInfrastructure implements StorageRepository {

    setStorage(property: string, value: string): void {
        sessionStorage.setItem(property, value)
    }

    getStorage(property: string): string | null {
        return sessionStorage.getItem(property);
    }

    clear(): void {
        sessionStorage.clear();
    }

    getFiledInToken(field: string): string | string[] {
        const accessToken = sessionStorage.getItem('accessToken');
        const payload = jwtDecode(accessToken)
        return payload[field];
    }

}