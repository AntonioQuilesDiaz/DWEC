import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSecionComponent } from './Componentes/inicio-secion/inicio-secion.component';
import { CrearCuentaComponent } from './Componentes/crear-cuenta/crear-cuenta.component';
import { MenuComponent } from './Componentes/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSecionComponent,
    CrearCuentaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
