import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { CovidModel } from "../domain/covid.model";
import { CovidRepository } from "../domain/covid.repository";

@Injectable()

export class CovidInfastructure implements CovidRepository {

    constructor(private readonly http: HttpClient) {

    }
    getCovidData(): Observable<CovidModel[]> {
        return this.http.get<CovidModel[]>("/api/confirmed").pipe(
            map((data: CovidModel[]) => data.slice(0, 30))
        );
    }


}