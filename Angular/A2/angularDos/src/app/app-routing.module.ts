import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistroComponent } from './pages/registro/registro.component';
import {  PerfilComponent } from './pages/perfil/perfil.component';
import {  MisMascotasComponent } from './pages/mis-mascotas/mis-mascotas.component';
import {  AnadirMascotasComponent} from './pages/anadir-mascotas/anadir-mascotas.component';

const routes: Routes = [
  {path: 'Inicio', component: InicioComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'home', component: HomeComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'mis-mascotas', component: MisMascotasComponent },
  {path: 'añadir-mascota', component: AnadirMascotasComponent},
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
