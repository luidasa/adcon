import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagosCardComponent } from './components/pagos-card/pagos-card.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { NoticiasPageComponent } from './pages/noticias-page/noticias-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagosCardComponent,
    InicioPageComponent,
    NoticiasPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
