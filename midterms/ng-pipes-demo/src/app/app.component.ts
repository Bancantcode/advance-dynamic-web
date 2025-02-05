import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval, of, map } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MyServiceService } from './my-service.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NewCmpComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'ng-pipes-demo';
  currentDate = new Date('2024-04-26T15:30:45'); 

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

  // new
  // currentDate = new Date('2024-04-26T15:30:45');
  // price = 42.42424242;

    arrayStream$ = of([1,2,3,4,5]).pipe(delay(1000));
    transformedData$ = of({ key: 'value', num: 42}).pipe(
      delay(1500),
      map(data => `Processed: ${data.key}-${data.num}`)
    )
    combinedAsync$ = of({ status: 'Active' }).pipe(
      delay(2000),
      map(data => `Status: ${data.status}`)
    )

  nestedArrays = {
    data: [
      [1,2,3,],
      [4,5,6,],
      [7,8,9,]
    ],
    metadata: { type: 'matrix' }
  };

  complexData = {
    id: 1,
    details: {
      name: 'Complex Object',
      properties: {
        color: 'blue',
        size: 'large',
        features: ['a', 'b', 'c']
      }
    }
  };

  mixedTypes = {
    string: 'text',
    number: 42,
    boolean: true,
    array: [1, 'two', false],
    nested: { key: 'value' }
  }

  numbers = [1,2,3,4,5,6,7,8,9,10];
  longString = 'Hello World';
  objectArray = [
    { id: 1, name: 'First' },
    { id: 2, name: 'Second' },
    { id: 3, name: 'Third' },
    { id: 4, name: 'Fourth' },
  ]

}
