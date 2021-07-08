import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', redirectTo: '/authentication',component: AppComponent },
  { path: '', component:  AuthComponentComponent},
  { path: 'dashboard-component', component: DashboardComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

