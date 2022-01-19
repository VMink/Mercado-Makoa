import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

import { FormGroup, FormBuilder, Validators, NgModel } from "@angular/forms";


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  generarOrden: FormGroup;

  constructor( private cartService: CartService, public formBuilder: FormBuilder ) { }

  total = 0;

  cart = [];

  ngOnInit() {

    this.cart = this.cartService.getCart();

  }

  removeProduct(product){
  
    this.cartService.removeProduct(product);
  
  }

  getSubtotal(x,y){
    return Math.round(x*y);
  }

  getTotal() {
    this.total = this.cart.reduce((i, j) => i + j.precioVariable * j.quantity, 0); 
    return Math.round(this.total); 
  }
  
}
