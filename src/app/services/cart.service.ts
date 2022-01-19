import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getCart(){
    return this.cart;
  }

  getCartItemCount(){
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for(let p of this.cart) {
      if(p.nombre == product.nombre){
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
      this.cartItemCount.next(this.cartItemCount.value + 1);
    }
    console.log(this.cart)
  }

  removeProduct(product) {
    for(let [index, p] of this.cart.entries()) {
      if(p.nombre === product.nombre){
        this.cartItemCount.next(this.cartItemCount.value - 1);
        this.cart.splice(index, 1);
      }
    }
  }

}
