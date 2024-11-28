import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technical-skills',
  imports: [
    CommonModule
  ],
  templateUrl: './technical-skills.component.html',
  styleUrl: './technical-skills.component.css'
})
export class TechnicalSkillsComponent {
  technicalSkills1 = [ "JAVASCRIPT", "HTML", "CSS", "SASS", "TAILWINDCSS", "BOOTSTRAP", "RESTFUL API", "ShadcnUI", ]
  technicalSkills2 = [ "REACT.JS", "NEXT.JS", "VUE.JS", "PYTHON", "JAVA", "PHP", "GSAP", "DaisyUI", ]
  technicalSkills3 = [ "NODE.JS", "EXPRESS.JS", "JQUERY", "MYSQL", "MongoDB", "PostgreSQL", "Clerk", "Git & Github", ]
  technicalSkills4 = [ "Prisma", "Figma", "Web Development", "Wireframing", "UI/UX Design", "Branding", "CMS Integration", ]
}
