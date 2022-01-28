import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master/master.component';
import { ObligationsComponent } from './obligations/obligations.component';
import { PermissionDeniedComponent } from './permission-denied/permission-denied.component';
import { ReportsComponent } from './reports/reports.component';
import { AccountPostingComponent } from './transactions/accout-posting/accountposting.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AuthGuard } from './utility/app.gaurd';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'master', component: MasterComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN_ROLE'] } },
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard], data: { roles: ['USER_ROLE'] } },
  { path: 'eod', component: TransactionsComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN_ROLE'] } },
  { path: 'obligation', component: ObligationsComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN_ROLE'] } },
  { path: 'accountposting', component: AccountPostingComponent, canActivate: [AuthGuard], data: { roles: ['USER_ROLE'] } },
  { path: 'permission-denied', component: PermissionDeniedComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
