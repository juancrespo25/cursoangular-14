export interface Base<Entity> {

    insert(user: Entity): any

    list(): any

    listOne(id: number): any

    update(id: number, user: Entity): any

    delete(id: number): any
}