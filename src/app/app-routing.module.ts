import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { EncuestasComponent } from './views/encuestas/encuestas.component';
import { PaginasComponent } from './views/paginas/paginas.component';
import { TemasComponent } from './views/temas/temas.component';
import { MuestrasComponent } from './views/muestras/muestras.component';
import { RespuestasComponent } from './views/respuestas/respuestas.component';
import { PreguntasComponent } from './views/preguntas/preguntas.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta comodín que redirige al home
  { path: '', component: HomeComponent}, // Ruta principal
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard] },
  { path: 'encuestas', component: EncuestasComponent, canActivate: [AuthGuard] },
  { path: 'paginas', component: PaginasComponent, canActivate: [AuthGuard] },
  { path: 'temas', component: TemasComponent, canActivate: [AuthGuard] },
  { path: 'muestras', component: MuestrasComponent, canActivate: [AuthGuard] },
  { path: 'respuestas', component: RespuestasComponent, canActivate: [AuthGuard] },
  { path: 'preguntas', component: PreguntasComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
