import { HttpClient, HttpParams } from '@angular/common/http';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apikey: string ='dHq63LLYZkx0jYypiYHUwzZrrtc5oK5T';
  public servicioUrl ='https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  private _last: string[] = [];
  //todo cambiar eny por su respectiba clase
  public resultados: Gif[] = [];
  get historial() {
    //splice cortar desde hasta

    return [...this._historial];

  }

  constructor(private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse( localStorage.getItem('historial')!);
    // }


    if (localStorage.getItem('historial')) {
      this._last = JSON.parse(localStorage.getItem('historial') || '');
      this.buscarGifs((this._last[0].valueOf()));
    }
  }

  buscarGifs(query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);

      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    //console.log(this._historial);
    const params = new HttpParams()
                      .set('api_key', this.apikey)
                      .set('q', query)
                      .set('limit', '10');

  
    
     
     
    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search` , {params})
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
      })

  }

}
