import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import {QuotesComponent} from "../app/quotes/quotes.component"; 

const routes: Routes = [
    { path: "", redirectTo: "/quotes", pathMatch: "full" },
    { path: "quotes", component: QuotesComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }