import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LogoGrandeComponent } from './Componentes/logo-grande/logo-grande.component';
import { HuellaIZComponent } from './Componentes/huella-iz/huella-iz.component';
import { FormInicioComponent } from './Componentes/form-inicio/form-inicio.component';
import { HuellaDERComponent } from './Componentes/huella-der/huella-der.component';
import { FormRegistroComponent } from './Componentes/form-registro/form-registro.component';
import { VolverLoginComponent } from './Componentes/volver-login/volver-login.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    LogoGrandeComponent,
    HuellaIZComponent,
    FormInicioComponent,
    HuellaDERComponent,
    FormRegistroComponent,
    VolverLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
