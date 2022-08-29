import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "projects/sistema/src/environments/environment";
import { Observable } from "rxjs";
import { IResultPage } from "../interface/result-page.interface";


export abstract class BaseInfraestructure<Entity> {

    protected httpClient: HttpClient;

    constructor(private http: HttpClient, private readonly endpoint: string) { }

    insert(entity: Entity): Observable<any> {
        return this.http.post(`${environment.apiUrl}/${this.endpoint}`, entity);
    }

    list(): Observable<any> {
        return this.http.get(`${environment.apiUrl}/${this.endpoint}`);
    }

    listOne(id: number) {
        return this.http.get(`${environment.apiUrl}/${this.endpoint}/${id}`);
    }

    update(id: number, entity: Entity) {
        return this.http.put(`${environment.apiUrl}/${this.endpoint}/${id}`, entity);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/${this.endpoint}/${id}`);
    }

    page(page: number): Observable<IResultPage<Entity>> {

        return this.http.get<IResultPage<Entity>>(
            `${environment.apiUrl}/${this.endpoint}/page/${page}/${environment.pageSize}`
        );
    }
}