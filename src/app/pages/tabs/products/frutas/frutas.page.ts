import { Component, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/services/busqueda.service';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.page.html',
  styleUrls: ['./frutas.page.scss'],
})
export class FrutasPage implements OnInit {

  frutas: any[] = [];

  productoBuscado = '';

  fill = "outline"

  cart = [];
  products = [];

  constructor( private dataService: DataService, private busqueda: BusquedaService, private cartService: CartService ) { }

  ngOnInit() {

    this.dataService.getFrutas()
      .subscribe( frutas => {
        this.frutas = frutas;
      })
    
    this.busqueda.buscarProducto.subscribe( data => {
      this.productoBuscado = data.data;
    })

    this.cart = this.cartService.getCart();
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }

}
