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
import { MenuComponent } from './Componentes/menu/menu.component';
import { LogoMedianoComponent } from './Componentes/logo-mediano/logo-mediano.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { MisMascotasComponent } from './pages/mis-mascotas/mis-mascotas.component';
import { AnadirMascotasComponent } from './pages/anadir-mascotas/anadir-mascotas.component';

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
    MenuComponent,
    LogoMedianoComponent,
    HomeComponent,
    PerfilComponent,
    MisMascotasComponent,
    AnadirMascotasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
