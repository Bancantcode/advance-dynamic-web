import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-certification',
  imports: [
    CommonModule
  ],
  templateUrl: './skills-certification.component.html',
  styleUrl: './skills-certification.component.css'
})
export class SkillsCertificationComponent {
  certification = [
    "SEO Rank & Rise: The Beginner’s Blueprint to Web Winning (Code Geeks)",
    "The Complete 2024 Web Development Bootcamp (Udemy)",
    "Legacy Javascript Algorithms and Data Structures (freecodecamp)",
    "Responsive Web Design (freecodecamp)",
    "Get Started with Figma (Coursera)",
    "Beyond the Code: An Introduction to Web Design Principles (Code Geeks)",
    "Cyber Threat Management",
    "CCNA: Introduction to Networks",
  ]
}
