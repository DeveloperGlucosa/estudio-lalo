import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { EstudioComponent } from './pages/estudio/estudio.component'
import { ServiciosComponent } from './pages/servicios/servicios.component'
import { ProyectosComponent } from './pages/proyectos/proyectos.component'
import {ContactoComponent} from './pages/contacto/contacto.component'


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'estudio', component: EstudioComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'proyectos', component: ProyectosComponent },
    {path: 'contacto', component: ContactoComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }