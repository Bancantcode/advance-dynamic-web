import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,  
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  userName: string = "";
  email: string = "";
  password: string = "";
  birthDate!: Date;
  address: string = "";
  submitted = false;
  minSkillLevel = 1;
  maxSkillLevel = 10;
  selected = "option 2";
  favoriteFood: string = "";
  comment: string = "";
  selectedOption: string = "";

  isDark: boolean = false;

  toggleDarkMode() {
    this.isDark = !this.isDark;
    document.body.style.backgroundColor = this.isDark ? "#121212" : "#f5f5f5";
    document.body.style.color = this.isDark ? "white" : "black";
  }
  

  formdata: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^[A-Za-z].*/)
    ]),
    birthDate: new FormControl(null, [
      Validators.required,
      Validators.max(new Date(2006, 11, 31).getTime()),
      Validators.min(new Date(1900, 0, 1).getTime())
    ]),
    address: new FormControl(''),
    selectedOption: new FormControl('', Validators.required),
    favoriteFood: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  });

  onClickSubmit(data: {
    userName: string,
    email: string,
    password: string,
    birthDate: Date,
    address: string,
    selectedOption: string,
    favoriteFood: string,
    comment: string
  })

  {
    this.submitted = true;
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.birthDate = data.birthDate;
    this.address = data.address;
    this.selectedOption = data.selectedOption;
    this.favoriteFood = data.favoriteFood;
    this.comment = data.comment;

    if (this.formdata.valid) {
      console.log("Form Submitted!", this.formdata.value);
    } 
    else {
      console.log("Form is Not Valid!");
    }
  }
}
