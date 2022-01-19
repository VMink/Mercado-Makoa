import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  cartItemCount: BehaviorSubject<number>;
  cart = [];

  constructor( private cartService: CartService ) { }

  ngOnInit() {

    this.cartItemCount = this.cartService.getCartItemCount();
    this.cart = this.cartService.getCart();

  }

}
