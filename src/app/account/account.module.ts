import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AccountRoutingModule } from "./account.routes";


@NgModule({
    imports: [
        CommonModule,
        LoginComponent,
        RegisterComponent,
        AccountRoutingModule
    ]
})

export class AccountModule {

}