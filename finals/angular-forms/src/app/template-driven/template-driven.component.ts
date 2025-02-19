import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [ FormsModule, RouterOutlet, CommonModule ],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  title = 'Template Form App';
  anytext: string = "";
  email: string = "";
  password: string = "";
  age: number | null = null; 
  submitted: boolean = false

  onSubmit() {
    this.submitted = true;
  }
}
