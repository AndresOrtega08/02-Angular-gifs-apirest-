import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GifdPageComponent } from './gifd-page/gifd-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadoComponent } from './resultado/resultado.component';



@NgModule({
  declarations: [
    GifdPageComponent,
    BusquedaComponent,
    ResultadoComponent,
    
  ],
  exports:[
    GifdPageComponent,
 
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
