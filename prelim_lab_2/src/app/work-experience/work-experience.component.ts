import { Component } from '@angular/core';
// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  imports: [
    CommonModule
  ],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  projectName = [
    { 
      name: 'Satori Specialty Coffee', 
      description1: "A specialty coffee space designed to create, connect, and celebrate the love of coffee together in every cup.",
      description2: "Made using NextJS, SASS, GSAP, Figma"
    },
    {
      name: "Akaru: Enlightenment Through Reading",
      description1: "A digital library management system that allows readers to read in a way that is engaging, and that is easy and fun.",
      description2: "Made using HTML, CSS, Javascript, Firebase, Figma"
    },
    { 
      name: 'Crown Residence', 
      description1: "A property reservation website inspired by Airbnb.",
      description2: "Made using MongoDB, Express, React, NodeJS, Figma"
    },
    { 
      name: 'Responsive Crud Coffee Website', 
      description1: "This website was created for our final project in Dynamic Web Programming.",
      description2: "Made using HTML, CSS, Javascript, PHP, MySQL, Figma"
    },
  ];
}
