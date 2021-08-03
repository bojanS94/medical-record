import { Injectable } from '@angular/core';
import { PATIENTS } from '../mock-patients';
import { Patient } from '../patient';

import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor() { }

  getPatients(): Observable<Patient[]> {
    return of(PATIENTS);
  }
}
