import { Component, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/services/busqueda.service';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-quesos',
  templateUrl: './quesos.page.html',
  styleUrls: ['./quesos.page.scss'],
})
export class QuesosPage implements OnInit {

  quesos: any[] = [];

  productoBuscado = '';

  fill = "outline"

  cart = [];
  products = [];

  constructor( private dataService: DataService, private busqueda: BusquedaService, private cartService: CartService ) { }

  ngOnInit() {

    this.dataService.getQuesos()
      .subscribe( quesos => {
        this.quesos = quesos;
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
