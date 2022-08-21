import { Inject } from "@angular/core";
import { User } from "../domain/user";
import { UserRepository } from "../domain/user.repository";
import { UserInfrastructure } from "../infrastructure/user.infrastructure";
import { ClassAbstract } from "./abstract.class";

export class UserApplication extends ClassAbstract<User, UserRepository>{

    constructor(
        @Inject(UserInfrastructure) private readonly userRepository: UserRepository) {
        super(userRepository);
    }

    override insert(user: User) {
        alert("Ejecutando")
        this.userRepository.insert(user)
    }

    reports() {
        this.userRepository.reports();
    }
}