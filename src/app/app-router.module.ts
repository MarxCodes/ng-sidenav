import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltComponent } from './components/alt/alt.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'alt', component: AltComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
