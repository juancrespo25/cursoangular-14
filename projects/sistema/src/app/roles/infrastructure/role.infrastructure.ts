import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseInfraestructure } from "../../shared/infrastructure/base-infrastructure";
import { Role } from "../domain/role";
import { RoleRepository } from "../domain/role.repository";

@Injectable()
export class RoleInfrastructure
    extends BaseInfraestructure<Role>
    implements RoleRepository {

    constructor(http: HttpClient) {
        super(http, "roles");
        this.httpClient = http;
    }
}
