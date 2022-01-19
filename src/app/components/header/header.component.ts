import { Component, Input, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/services/busqueda.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {  

  @Input() titulo: string;

  textoBuscar = '';

  constructor( private busqueda: BusquedaService ) { }

  ngOnInit() {}

  buscar( event ) {
    this.textoBuscar = event.detail.value;
    this.busqueda.buscarProducto.emit({ data: this.textoBuscar })
  }

}
