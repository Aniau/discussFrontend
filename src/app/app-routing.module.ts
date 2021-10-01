import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { SettingsComponentComponent } from './settings-component/settings-component.component';
import { ChatComponentComponent } from './chat-component/chat-component.component';
import { UsersComponentComponent } from './users-component/users-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';

const routes: Routes = [
  // { path: '', redirectTo: '/authentication',component: AppComponent },
  { path: '', component:  AuthComponentComponent},
  { path: 'dashboard-component', component: DashboardComponentComponent },
  { path: 'settings-component', component: SettingsComponentComponent },
  { path: 'chat-component', component: ChatComponentComponent },
  { path: 'users-component', component: UsersComponentComponent },
  { path: 'registration-component', component: RegistrationComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

