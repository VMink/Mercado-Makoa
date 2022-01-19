import { Component, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/services/busqueda.service';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carnes',
  templateUrl: './carnes.page.html',
  styleUrls: ['./carnes.page.scss'],
})
export class CarnesPage implements OnInit {

  carnes: any[] = [];

  productoBuscado = '';

  cart = [];
  products = [];

  constructor( private dataService: DataService, private busqueda: BusquedaService, private cartService: CartService, private modalCtrl: ModalController ) { }

  ngOnInit() {

    this.dataService.getCarnes()
      .subscribe( carnes => {
        this.carnes = carnes;
      })

    this.busqueda.buscarProducto.subscribe( data => {
      this.productoBuscado = data.data;
    })

    this.cart = this.cartService.getCart();
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }

  openCart() {

  }

}
