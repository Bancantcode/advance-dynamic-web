import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form-validation',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent {
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      fullName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(100)]),
      address: new FormControl('', [Validators.required, Validators.minLength(10)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      enrolled: new FormControl(false, [Validators.requiredTrue])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
      alert("Form Submitted!!");
    } else {
      console.log('Form is not valid!');
      alert("Form is Invalid!!");
    }
  }
}
