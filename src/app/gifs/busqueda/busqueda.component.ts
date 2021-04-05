import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  // viewChiel sirve para sellecionar el input a traves de la etiqueta de refencia
  // el ! del txtbuscar es Non Null assertion operator confia en mi maldito que se que estara
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {

  }
  buscar() {

    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }
    this.gifsService.buscarGifs(valor);
   console.log('estoy estoy buscando = ',valor);
   
    this.txtBuscar.nativeElement.value = "";
  }

}
