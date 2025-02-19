import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
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
  title = "reactive form app"
  userName: string = "";
  formdata: FormGroup = new FormGroup({
    userName: new FormControl("")
  });

  onClickSubmit(data: { userName: string }) {
    this.userName = data.userName;
  }
}
