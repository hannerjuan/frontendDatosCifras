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

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta principal
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'encuestas', component: EncuestasComponent },
  { path: 'paginas', component: PaginasComponent },
  { path: 'temas', component: TemasComponent },
  { path: 'muestras', component: MuestrasComponent },
  { path: 'respuestas', component: RespuestasComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: '**', redirectTo: '' } // Ruta comodín que redirige al home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
