import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { Gif } from '../../gifs/interface/gifs.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  get historial() {
   return this.gifsService.historial;
  }
  constructor(private gifsService:GifsService) { }

  buscar(item:string){
    
    this.gifsService.buscarGifs(item);
    
  }


}
