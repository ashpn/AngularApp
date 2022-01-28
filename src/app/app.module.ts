import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { MasterComponent } from './master/master.component';
import { ReportsComponent } from './reports/reports.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { HomeComponent } from './home/home.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './utility/app.init';
import { PermissionDeniedComponent } from './permission-denied/permission-denied.component';
import { ObligationsComponent } from './obligations/obligations.component';
import { AccountPostingComponent } from './transactions/accout-posting/accountposting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MasterComponent,
    ReportsComponent,
    TransactionsComponent,
    HomeComponent,
    ObligationsComponent,
    AccountPostingComponent,
    PermissionDeniedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
