import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { NoticiasPageComponent } from './pages/noticias-page/noticias-page.component';

const routes: Routes = [
  {path:'inicio', component: InicioPageComponent},
  {path:'noticias', component: NoticiasPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
