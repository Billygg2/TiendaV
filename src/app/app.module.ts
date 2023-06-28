import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ProductoService } from './servicio/prodcuto.service';
import { DataService } from './servicio2/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ComentarioDestacadoDirective } from './directiv1/comentario-destacado.directive';
import { ImagenVerDirective } from './directiv2/imagen-ver.directive';
import { TruncarTextoPipe } from './pipes1/truncar-texto.pipe';
import { MayusculaTextoPipe } from './pipes2/mayuscula-texto.pipe';
import { ClimaapiComponent } from './climaapi/climaapi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ComentariosComponent,
    ComentarioDestacadoDirective,
    ImagenVerDirective,
    TruncarTextoPipe,
    MayusculaTextoPipe,
    ClimaapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductoService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
