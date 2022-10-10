import { Inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { CovidModel } from "../domain/covid.model";
import { CovidRepository } from "../domain/covid.repository";
import { Graph } from "../domain/graph.interface";
import { CovidInfastructure } from "../infrastructure/covid.infrastructure";

@Injectable()
export class CovidApplication {
    constructor(@Inject(CovidInfastructure) private readonly repository: CovidRepository) { }

    getCovidData(): Observable<Graph[]> {
        return this.repository.getCovidData().pipe(
            map((data: CovidModel[]) =>
                data.map((covid: CovidModel) => ({
                    name: covid.countryRegion,
                    value: covid.confirmed,
                }))
            )
        )


    }
}