import { Observable } from "rxjs"

export interface Base<Entity> {

    insert(user: Entity): Observable<any>

    list(): Observable<any>

    listOne(id: number): Observable<any>

    update(id: number, user: Entity): Observable<any>

    delete(id: number): Observable<any>

    page(page: number): Observable<any>
}