import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { TrainingComponent } from './training/training.component';
import { SkillsCertificationComponent } from './training/skills-certification/skills-certification.component';
import { ReferencesComponent } from './references/references.component';
import { TechnicalSkillsComponent } from './references/technical-skills/technical-skills.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    EducationComponent, 
    PersonalInfoComponent, 
    WorkExperienceComponent, 
    TrainingComponent, 
    SkillsCertificationComponent, 
    ReferencesComponent, 
    TechnicalSkillsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'prelim_lab_2';
}
