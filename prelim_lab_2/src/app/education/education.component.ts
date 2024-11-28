import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [
    CommonModule
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  relevantCoursework1 = [
    "Dynamic Web Application and Development Tools",
    "Data Structure and Algorithms",
    "Object-Oriented Programming",
    "Advance Database",
    "Project Management",
    "Operating Systems Application",
    "System Analysis and Design",
  ]
  relevantCoursework2 = [
    "Computing Fundamentals",
    "Information Assurance and Security",
    "Basic Programming in Web",
    "Introduction to Networks",
    "Information Management",
    "Programming with Data Structures",
  ]
}
