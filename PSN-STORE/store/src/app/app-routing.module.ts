import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { LoginComponent } from './compontents/login/login.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [{
	path: '',
	component: HomeComponent,
	pathMatch: 'full'
},
{
	path: 'detalhes',
	component: DetalhesComponent,
	canActivate: [authGuard]
},
{
	path: 'login',
	component: LoginComponent
},
{
	path: '**',
	redirectTo: ''
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
