import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getFrutas() {
    return this.http.get<any[]>('/assets/productos/frutas.json')
  }

  getVerduras(){
    return this.http.get<any[]>('/assets/productos/verduras.json')
  }

  getQuesos(){
    return this.http.get<any[]>('/assets/productos/quesos.json')
  }

  getCarnes(){
    return this.http.get<any[]>('/assets/productos/carnes.json')
  }


}

