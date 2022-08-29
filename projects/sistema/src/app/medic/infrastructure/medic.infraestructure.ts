import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseInfraestructure } from "../../shared/infrastructure/base-infrastructure";
import { Medic } from "../domain/medic";
import { MedicRepository } from "../domain/medic.repository";

@Injectable()
export class MedicInfraestructure
    extends BaseInfraestructure<Medic>
    implements MedicRepository {


    constructor(http: HttpClient) {
        super(http, "medics");
        this.httpClient = http;
    }
}