import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseInfraestructure } from "../../shared/infrastructure/base-infrastructure";
import { Driver } from "../domain/driver";
import { DriverRepository } from "../domain/driver.repository";

@Injectable()
export class DriverInfraestructure
    extends BaseInfraestructure<Driver>
    implements DriverRepository {


    constructor(http: HttpClient) {
        super(http, "drivers");
        this.httpClient = http;
    }
}