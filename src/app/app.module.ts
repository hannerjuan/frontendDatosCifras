import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar esto
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MuestrasComponent } from './components/muestras/muestras.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { EncuestasComponent } from './views/encuestas/encuestas.component';
import { PaginasComponent } from './views/paginas/paginas.component';
import { TemasComponent } from './views/temas/temas.component';
import { RespuestasComponent } from './views/respuestas/respuestas.component';
import { PreguntasComponent } from './views/preguntas/preguntas.component';
import { AppRoutingModule } from './app-routing.module'; // Importación del módulo de rutas



@NgModule({
  declarations: [
    AppComponent,
    MuestrasComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UsuariosComponent,
    EncuestasComponent,
    PaginasComponent,
    TemasComponent,
    RespuestasComponent,
    PreguntasComponent
  ],
  imports: [
    
    BrowserModule, 
    CommonModule,
    HttpClientModule, // Importar el módulo HTTP
    BrowserAnimationsModule,
    AppRoutingModule
    // Otros módulos
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
