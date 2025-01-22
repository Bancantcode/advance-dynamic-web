import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'ng-pipes-demo';
  presentDate = new Date(); 

  // AsyncPipe
  time$ = interval(1000).pipe(
    map(() => new Date())
  )

  // JsonPipe
  testObject = {
    name: 'Bryan Aaron Santiago',
    age: 20,
    food: 'Cookies'
  }

  // Currency Pipe
  price: number = 20000;

  // Slice Pipe
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

  // Decimal Pipe
  decimalNum1: number = 8.2343242;
  decimalNum2: number = 5.43;

  todaydate;
  constructor(private myservice:MyServiceService) {
    this.todaydate = this.myservice.showTodayDate();
  }

}
