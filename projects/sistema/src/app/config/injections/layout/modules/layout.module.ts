import { ModuleWithProviders, NgModule } from "@angular/core";
import { ILayout } from "../interface/layout.interface";
import { LAYOUT_TOCKEN } from "../tokens/layout.token";

@NgModule()
export class LayoutModule {
    static forRoot(config: ILayout): ModuleWithProviders<LayoutModule> {
        return {
            ngModule: LayoutModule,
            providers: [
                { provide: LAYOUT_TOCKEN, useValue: config }
            ]
        }
    }
}