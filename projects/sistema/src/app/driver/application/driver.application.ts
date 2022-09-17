import { Inject, Injectable } from "@angular/core";
import { BaseApplication } from "../../shared/application/base.application";
import { Driver } from "../domain/driver";
import { DriverRepository } from "../domain/driver.repository";
import { DriverInfraestructure } from "../infrastructure/driver.infrastructure";

@Injectable()
export class DriverApplication extends BaseApplication<Driver, DriverRepository> {

    constructor(
        @Inject(DriverInfraestructure)
        private readonly medicRepository: DriverRepository
    ) {
        super(medicRepository)
    }

}