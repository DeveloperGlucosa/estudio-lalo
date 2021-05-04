import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { EstudioComponent } from './pages/estudio/estudio.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'estudio', component: EstudioComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }