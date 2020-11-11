import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  

  PRODUCTS: any;

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.PRODUCTS = this.productService.getProducts();
  }

}
