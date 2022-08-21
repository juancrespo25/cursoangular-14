import { Base } from "./base.interface";
import { User } from "./user"

export interface UserRepository extends Base<User> {
    reports(): void;
}