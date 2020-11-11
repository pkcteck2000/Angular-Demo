import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  PRODUCTS =[
    {
      id: "1",
      name: "NOKIA",
      price: "6000",
      sockts: "50p",
      date: "30/12/2020"
    },
    {
      id: "2",
      name: "SAMSUNG",
      price: "7000",
      sockts: "150p",
      date: "13/01/2020"
    },
    {
      id: "3",
      name: "APPLE",
      price: "106000",
      sockts: "5p",
      date: "23/02/2020"
    },
    {
      id: "4",
      name: "LENOVO",
      price: "8000",
      sockts: "2p",
      date: "09/07/2019"
    }
  ];

  getProducts = () => {
    return this.PRODUCTS;
  }

  getProduct = (id) => {
    this.PRODUCTS.forEach(
      (product) => {
        if(product.id == id) {
          return product;
        }
      }
    )
  }

  constructor() { }
}
