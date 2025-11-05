import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPrincingComponent } from './components/card/card-princing/card-princing.component';
import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { LoginComponent } from './compontents/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPrincingComponent,
    DetalhesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
		    { provide: LOCALE_ID, useValue: 'pt-BR' },
   			 // Opcional, mas recomendado para evitar avisos e definir o default:
    		{ provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
