import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseInfraestructure } from "../../shared/infrastructure/base-infrastructure";
import { User } from "../domain/user";
import { UserRepository } from "../domain/user.repository";

@Injectable()
export class UserInfrastructure
    extends BaseInfraestructure<User>
    implements UserRepository {

    constructor(http: HttpClient) {
        super(http, "users")
        this.httpClient = http
    }
}