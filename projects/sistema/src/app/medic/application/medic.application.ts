import { Inject, Injectable } from "@angular/core";
import { BaseApplication } from "../../shared/application/base.application";
import { Medic } from "../domain/medic";
import { MedicRepository } from "../domain/medic.repository";
import { MedicInfraestructure } from "../infrastructure/medic.infraestructure";

@Injectable()
export class MedicApplication
    extends BaseApplication<Medic, MedicRepository> {

    constructor(
        @Inject(MedicInfraestructure)
        private readonly medicRepository: MedicRepository
    ) {
        super(medicRepository)
    }

}