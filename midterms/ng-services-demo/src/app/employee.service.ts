import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployee() {
    return [
      { 
        id: 101, 
        firstname: 'Joseph', 
        lastname: 'Dizon', 
        email: 'jdizon@hau.edu.ph'
      },
      { 
        id: 102, 
        firstname: 'James', 
        lastname: 'Atienza', 
        email: 'jatienza@hau.edu.ph'
      },
      { 
        id: 103, 
        firstname: 'John', 
        lastname: 'Cena', 
        email: 'jcena@hau.edu.ph'
      },
      { 
        id: 104, 
        firstname: 'Robert', 
        lastname: 'Quintana', 
        email: 'rquintana@hau.edu.ph'
      },
      { 
        id: 20935473, 
        firstname: 'Bryan Aaron', 
        lastname: 'Santiago', 
        email: 'bbsantiago@hau.edu.ph'
      },
    ]
  }
}
