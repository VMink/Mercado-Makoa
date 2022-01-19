import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { AlertController } from '@ionic/angular';


import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  orden: FormGroup;

  isSubmitted = false;

  total;

  cart = [];

  constructor(private cartService: CartService, public formBuilder: FormBuilder, public alertController: AlertController ) { }

  ngOnInit() {

    emailjs.init("user_DmV7hf6932z2Yq7Aqrjy7")

    this.cart = this.cartService.getCart()

    console.log(this.cart)

    this.orden = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      apellido: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.maxLength(50)]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(20)]],
      direccion: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      codigoPostal: ['', [Validators.required]],
      detalles: ['']
    })
  }

  simplificarCarrito(){
    var simplifiedCart = [];
    for(var i = 0; i < this.cart.length; i++){
      var simplifiedProduct = {
        nombre: this.cart[i].nombre,
        cantidad: this.cart[i].quantity,
        unidad: this.cart[i].unidad,
        color: this.cart[i].color,
        tiempo: this.cart[i].tiempo
      };
      simplifiedCart.push(simplifiedProduct)
    }
    return simplifiedCart;
  }

  enviarOrden(){
    this.isSubmitted = true;
    var simplifiedCart = this.simplificarCarrito();
    if(!this.orden.valid){
      return false
    } else {
      var total = this.getTotal()
      var email = {
        nombre: this.orden.value.nombre,
        apellido: this.orden.value.apellido,
        correo: this.orden.value.correo,
        telefono: this.orden.value.telefono,
        direccion: this.orden.value.direccion,
        codigoPostal: this.orden.value.codigoPostal,
        detalles: this.orden.value.detalles,
        cart: simplifiedCart,
        total: total
      }
        var tempParams = {
        from_name: "Makoa App",
        nombre: email.nombre,
        apellido: email.apellido,
        correo: email.correo,
        telefono: email.telefono,
        direccion: email.direccion,
        codigoPostal: email.codigoPostal,
        detalles: email.detalles,
        pedido: JSON.stringify(email.cart),
        total: total
      }
      emailjs.send("service_4psfcov","template_m5nz0al",tempParams)
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmado',
      message: 'Su pedido se ha realizado con éxito',
      buttons: ['Continuar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  getSubtotal(x,y){
    return Math.round(x*y);
  }

  getTotal() {
    this.total = this.cart.reduce((i, j) => i + j.precioVariable * j.quantity, 0); 
    return Math.round(this.total); 
  }

}
