import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-driven',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-driven.component.html',
  styleUrl: './reactive-driven.component.css'
})
export class ReactiveDrivenComponent {
  title = "Reactive Driven Form";
  userName: string = "";
  email: string = "";
  password: string = "";
  formdata: FormGroup = new FormGroup({
    userName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    age: new FormControl("", [Validators.required, Validators.min(18)]),
  });

  onClickSubmit(data: { userName: string, email: string, password: string, age: number }) {
    if (this.formdata.valid) {
      this.userName = data.userName;
      this.email = data.email; 
      this.password = data.password;
    } else {
      console.log('Form is invalid!');
    }
  }
}
