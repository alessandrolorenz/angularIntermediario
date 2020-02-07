import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { DepartmentService } from '../department.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  name: string;
  description: string;
  price: number;
  department: Department;

  departments: Department[];

  constructor(
    private productService: ProductService,
    private deparmentService: DepartmentService
  ) { }

  ngOnInit() {
    this.departments = this.deparmentService.getDepartments()
  }

  save() {
    this.productService.addProduct({
      name: this.name,
      description: this.description,
      price: this.price,
      department: this.department
    });
    this.clear()
  }

  clear() {
    this.name = "";
    this.price = 0;
    this.description = "";
    this.department = null;
  }

}
