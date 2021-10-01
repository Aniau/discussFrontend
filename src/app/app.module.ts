import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { SettingsComponentComponent } from './settings-component/settings-component.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { ChatComponentComponent } from './chat-component/chat-component.component';
import { UsersComponentComponent } from './users-component/users-component.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LogoComponentComponent } from './logo-component/logo-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponentComponent,
    DashboardComponentComponent,
    SettingsComponentComponent,
    MenuComponentComponent,
    ChatComponentComponent,
    UsersComponentComponent,
    LogoComponentComponent,
    RegistrationComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    AppRoutingModule,
    MatSidenavModule,
    MatMenuModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
