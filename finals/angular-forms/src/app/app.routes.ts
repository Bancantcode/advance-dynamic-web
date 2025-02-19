import { Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveDrivenComponent } from './reactive-driven/reactive-driven.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';


export const routes: Routes = [
    { path: 'template', component: TemplateDrivenComponent },
    { path: 'reactive', component: ReactiveDrivenComponent },
    { path: 'reactive-form-validation', component: ReactiveFormValidationComponent },
];
