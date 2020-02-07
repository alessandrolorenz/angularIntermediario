import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './models/product.model';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataFromServer: any[] = [
    {id: 1, name: "Laptop", department_id:4, price:40, description: "Laptop Dell"},
    {id: 2, name: "Jogo Ameba", department_id:1, price:15, description: "Jogo de tabuleiro Ameba"},
    {id: 3, name: "O mundo de Sofia", department_id:2, price:20, description: "Livro o Mindo de Sofia"},
    {id: 4, name: "Fone Sony", department_id:4, price:40, description: "Headphone da marca Sony"},
  ]

  private products: Product[] = []
  nextId: number;

  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private myDepartmentService: DepartmentService) {
    for(let p of this.dataFromServer){
      this.products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        department: this.myDepartmentService.getDepartmentById(p.department_id)
      });
      this.nextId = p.id +1;
    }
  }


  getProducts(): Product[] {
    return this.products;
  }

  addProduct(p: Product) {
    let prod: Product = {id: this.nextId++, ...p}
    this.products.push(prod);
    console.log(this.products)
    this.onNewProduct.emit(prod)
  }

}
