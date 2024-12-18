import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
})

export class DataBindingDemoComponent {
  message : string = "My First App!"
  description: string  = "This is my new Angular Application"
  imageUrl: string = 'assets/image1.webp'
  w: number = 50;
  h: number = 50
  altText: string = 'Angular Image'
  textColor: string = 'blue'
  isHighlighted: boolean = true

  yourName = ''

  count = 0
  increment() {
    this.count++
  }
  decrement() {
    this.count--
  }
}
