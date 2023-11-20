class Regalo {
    constructor(containerElement,regaloSrc) {
        this.containerElement = containerElement;
        this.abrirRegalo = this.abrirRegalo.bind(this);
        this.callbackAbierto = this.callbackAbierto;
        this.regaloSrc = regaloSrc;
        this.image = document.createElement('img');
        this.image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
        this.image.addEventListener('click', this.abrirRegalo);
        this.containerElement.appendChild(this.image);
    }

    abrirRegalo(event) {
        this.image.src = this.regaloSrc;
        this.image.removeEventListener('click', this.abrirRegalo);
        this.callbackAbierto();
       }
}

class Aplicacion {
    constructor(contenedorRegalo, contenedorTitulo) {
    this.contenedorRegalo = contenedorRegalo;
    this.contenedorTitulo = contenedorTitulo;
    
    this.regaloAbierto = this.regaloAbierto.bind(this);
    this.regalos = [];
    this.cargarContenedorRegalo();
    this.regalosAbiertos = 0;
   }

   cargarContenedorRegalo() {
    for (const enlace of REGALOS_ENLACES) {
        const regalo = new Regalo(this.contenedorRegalo, enlace, this.regaloAbierto);
        this.regalos.push(regalo);
    }
   }

   regaloAbierto() {
    this.regalosAbiertos++;
    if (this.regalosAbiertos === this.regalos.length) {
        this.contenedorTitulo.textContent = 'Disfruta tus regalos';
    }
   }
}