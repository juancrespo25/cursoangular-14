import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { ILayout } from "../interface/layout.interface";
import { LAYOUT_TOCKEN } from "../tokens/layout.token";

@Injectable({
    providedIn: 'root'
})

export class LayoutService {

    private configSubject: BehaviorSubject<ILayout>;

    constructor(@Inject(LAYOUT_TOCKEN) private config: ILayout) {

        this.configSubject = new BehaviorSubject<ILayout>(config)

    }

    set configuration(config: any) {
        this.configSubject.next(config);
    }

    get configuration(): Observable<ILayout> {
        return this.configSubject.asObservable();
    }
}