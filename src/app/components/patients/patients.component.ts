import { PATIENTS } from '../../mock-patients';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../../patient';
import { PatientsInfo } from '../../patient';
import { PatientsService } from '../../services/patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  searchValue?: any;
  patients = PATIENTS;
  selectedPatient?: Patient;
  cardNumberControl?: Patient;

  locales = [
    { id: 0, name: "" },
    { id: 1, name: "Budzak" },
    { id: 2, name: "Mejdan" },
    { id: 3, name: "Centar" },
    { id: 4, name: "Starcevica" },
    { id: 5, name: "Drakulic" }
  ];
  selectedValue = null;

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.patientsService.getPatients()
      .subscribe(patients => (this.patients = patients));
  }

  onSelect(patient: Patient) {
    this.selectedPatient = patient;
  }

  card = new PatientsInfo(0, 7774, 'Bojan', 'Savic', '02051994', 'Drakulic', 'Mladje Cusica bb');

  newInfo() {
    this.card = new PatientsInfo(4, 0, '', '', '', '', '',);
  }
}
