import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  getProducts() {
    return [
      {
        product_id: 101,
        product_name: 'Logitech Mouse',
        description: '6 Button Mechanical Mouse',
        price: 899.00
      },
      {
        product_id: 102,
        product_name: 'JBL BT Speaker',
        description: 'Waterproof Radio 360 Surround',
        price: 1099.00
      },
      {
        product_id: 103,
        product_name: 'Mechanical KeyBoard',
        description: 'Hot-swappable RGB Backlit',
        price: 2395.00
      },
      {
        product_id: 104,
        product_name: 'Oculus Meta',
        description: 'All-in-one Gaming Headset',
        price: 22450.00
      },
    ]
  }
}
