import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonesPageComponent} from './pages/pokemones-page/pokemones-page.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: PokemonesPageComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes), CommonModule] ,
  exports: [RouterModule]

})
export class AppRoutingModule {}

