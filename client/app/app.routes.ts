import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { CatalogComponent } from './components/catalog/catalog.component';
//import { NgModule } from '@angular/core';
import { LoginComponent } from './components/auth-user/login/login.component';
import { RegisterComponent } from './components/auth-user/register/register.component';
//import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Пренасочване към /home
  { path: 'home', component: HomeComponent }, 
  { path: 'catalog', component: CatalogComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

/*@NgModule({
  imports: [ReactiveFormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}*/
