import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-produts-table',
  templateUrl: './produts-table.component.html',
  styleUrls: ['./produts-table.component.css']
})
export class ProdutsTableComponent implements OnInit {

  @ViewChild(MatTable, {static:false}) table: MatTable<any>;

  products: Product[];
  prodColumns: string[] = ["id", "prodName", "price", "description", "department"];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productService.onNewProduct.subscribe(p=>{
      this.table.renderRows();
    }) //to foreventemitter é subject (gera um evento que deve ser subscribed)
  }

}
