import { Component, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/services/busqueda.service';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.page.html',
  styleUrls: ['./verduras.page.scss'],
})
export class VerdurasPage implements OnInit {

  verduras: any[] = [];

  productoBuscado = '';

  cart = [];
  products = [];

  constructor( private dataService: DataService, private busqueda: BusquedaService, private cartService: CartService, private modalCtrl: ModalController ) { }

  ngOnInit() {

    this.dataService.getVerduras()
      .subscribe( verduras => {
        this.verduras = verduras;
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
