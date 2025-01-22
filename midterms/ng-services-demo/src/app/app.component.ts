import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './employee.service';
import { ProductsService } from './products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-services-demo';

  public employees: {
    id: number,
    firstname: string,
    lastname: string,
    email: string
  } [] = [];

  public products: {
    product_id: number,
    product_name: string,
    description: string,
    price: number
  } [] = [];

  constructor(
    private _employeeService: EmployeeService,
    private _productList: ProductsService
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
    this.products = this._productList.getProducts();
  }
}
