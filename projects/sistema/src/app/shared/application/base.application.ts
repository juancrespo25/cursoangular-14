import { Base } from "../domain/base.interface";

export abstract class BaseApplication<Entity, Repository extends Base<Entity>>{

    constructor(private readonly repository: Repository) { }

    insert(entity: Entity) {
        return this.repository.insert(entity);
    }

    list() {
        return this.repository.list()
    }

    listOne(id: number) {
        return this.repository.listOne(id);
    }

    update(id: number, entity: Entity) {
        return this.repository.update(id, entity)
    }

    delete(id: number) {
        return this.repository.delete(id);
    }

    page(page: number) {
        return this.repository.page(page);
    }
}