import { Component } from '@angular/core';

@Component({
  selector: 'app-Deber5',
  templateUrl: './Deber5.component.html',
  styleUrls: ['./Deber5.component.scss']
})
export class Deber5Component {
  // Lista de productos
  products = [
    { 
      name: 'Curso de skate', 
      price: 20.00, 
      inventoryStatus: 'OFERTA', 
      image: 'https://i.gifer.com/6Ue.gif'
    },
    { 
      name: 'Aprenda matemáticas', 
      price: 28.50, 
      inventoryStatus: 'OFERTA', 
      image: 'https://i.gifer.com/G0yR.gif'
    },
    { 
      name: 'Se alquila autos', 
      price: 100.25, 
      inventoryStatus: 'VENDIENDO', 
      image: 'https://i.gifer.com/DBr.gif'
    },
    { 
      name: 'Libro de cocina', 
      price: 205.50, 
      inventoryStatus: 'OFERTA', 
      image: 'https://cdn-icons-gif.flaticon.com/15578/15578601.gif'
    },
    { 
      name: 'Televisor plasma de última generación', 
      price: 8545.36, 
      inventoryStatus: 'VENDIENDO', 
      image: 'https://www.euronics.es/blog/wp-content/uploads/2018/08/ventjajas_desventajas_de_televisor_de_plasma_frente_a_otros_tipos.jpg'
    },
    { 
      name: 'Curso de pasteleria', 
      price: 125.36, 
      inventoryStatus: 'OFERTA', 
      image: 'https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_767/v1613490897/content-items/007/112/969/gif-original.gif?1613490897'
    },
  ];

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3,   // 4 productos visibles en pantallas grandes
      numScroll: 1
    },
    {
      breakpoint: '980px',
      numVisible: 2,   // 3 productos visibles en pantallas medianas
      numScroll: 1
    },
    {
      breakpoint: '660px',
      numVisible: 1,   // 2 productos visibles en pantallas pequeñas
      numScroll: 1
    },

  ];

  // Método para determinar el severidad de la disponibilidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }
}
