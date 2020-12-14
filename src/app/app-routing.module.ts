import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuotasPageComponent } from './pages/cuotas/cuotas-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { NoticiasPageComponent } from './pages/noticias-page/noticias-page.component';

const routes: Routes = [
  {path:'inicio', component: InicioPageComponent},
  {path:'noticias', component: NoticiasPageComponent},
  {path:'cuotas', component: CuotasPageComponent},
  {path:'**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
