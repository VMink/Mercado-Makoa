import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-funciona',
  template: `
  <ion-content>
    <ion-slides pager="true" [options]="slideOpts">
      <ion-slide>
        <img src="assets/img/logo..png">
        <h1>¿Quienes somos?</h1>
        <p>En Mercado Makoa nos enfocamos en ayudar a mercados locales a través de la venta de frutas y verduras mexicanas de alta calidad. Le ofrecemos al cliente una experiencia única con los mejores productos y precios justos.</p>
      </ion-slide>
      <ion-slide>
        <img src="assets/img/healthy-food.svg" style="width: 250px">
        <h1>¿Cómo funciona?</h1>
        <p>Dentro de nuestro catalogo de frutas usted agregue a su carrito las que desee. Luego en la pestaña de carrito podra colocar la cantingad en KG que desea de su producto. Si desea menos de 1 KG solamente ponga un "." Ej: .500 kg = 500 g. Luego se 
           redireccionara a una página dónde le pediremos sus datos para enviarle su pedido y ¡listo! <br> Además todos nuestros pagos son en efectivo ¡Nos paga cuando recibe el pedido!
        </p>
      </ion-slide>
      <ion-slide>
        <img src="assets/img/conversation.svg" style="width: 250px">
        <h1>Preguntas Frecuentes</h1>
        <h4>¿Cuándo llegará mi pedido?</h4>
        <p>Si su pedido fue hecho antes de las 11 am se le entregará el mismo día. Si el pedido se hizo después se entregará al siguiente día.</p>
        <h4>¿Puedo ver lo que me traen?</h4>
        <p>Si usted lo desea se puede comunicar por WhatsApp para escoger cualquier producto que desee.</p>
      </ion-slide>
      <ion-slide>
        <img src="assets/img/correo.svg" style="width: 250px">
        <h1>Contacto</h1>
        <p>Si tienes alguna duda con tu pedido o deseas alguna instruccion extra o detalle especifico sientete libre de contactarnos en:</p>
        <h4>Correo: <span>mercadomakoa@gmail.com</span></h4>
        <h4>Teléfono: <span>(56) 1930-3026, (55) 3145-0601</span></h4>
      </ion-slide>
      <ion-slide>
        <img src="assets/img/info.svg" style="width: 250px">
        <h1>Créditos</h1>
        <p>Icons made by<a href="https://www.freepik.com" title="Freepik"> Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
        <div>Iconos diseñados por <a href="https://flat-icons.com/" title="Flat Icons">Flat Icons</a> from<a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a></div>
      </ion-slide>
    </ion-slides>
  </ion-content>
  `,
  styleUrls: ['./como-funciona.page.scss'],
})
export class ComoFuncionaPage implements OnInit {

   slideOpts = {
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    on: {
      beforeInit() {
        const swiper = this;
  
        swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
  
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate() {
        const swiper = this;
        const {
          width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $
        } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform$$1 = swiper.translate;
        const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth;
        // Each slide offset from center
        for (let i = 0, length = slides.length; i < length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideSize = slidesSizesGrid[i];
          const slideOffset = $slideEl[0].swiperSlideOffset;
          const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
  
           let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
          // var rotateZ = 0
          let translateZ = -translate * Math.abs(offsetMultiplier);
  
           let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
          let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
  
           // Fix for ultra small values
          if (Math.abs(translateX) < 0.001) translateX = 0;
          if (Math.abs(translateY) < 0.001) translateY = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;
  
           const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  
           $slideEl.transform(slideTransform);
          $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
          if (params.slideShadows) {
            // Set shadows
            let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
              $slideEl.append($shadowBeforeEl);
            }
            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
              $slideEl.append($shadowAfterEl);
            }
            if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
            if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
          }
        }
  
         // Set correct perspective for IE10
        if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
          const ws = $wrapperEl[0].style;
          ws.perspectiveOrigin = `${center}px 50%`;
        }
      },
      setTransition(duration) {
        const swiper = this;
        swiper.slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
      }
    }
  }

  /* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */

  constructor() { }

  ngOnInit() {
  }

}
