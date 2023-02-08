import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { Huella1Component } from './Componets/huella1/huella1.component';
import { Huella2Component } from './Componets/huella2/huella2.component';
import { InicioComponent } from './Componets/inicio/inicio.component';
import { RegistrarComponent } from './Componets/registrar/registrar.component';
import { LogoGrandeComponent } from './Componets/logo-grande/logo-grande.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    Huella1Component,
    Huella2Component,
    InicioComponent,
    RegistrarComponent,
    LogoGrandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
