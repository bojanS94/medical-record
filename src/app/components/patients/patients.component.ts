import { PATIENTS } from '../../mock-patients';
import { Component, OnInit } from '@angular/core';
// import { Patient } from '../../patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  searchValue?: any;
  patients = PATIENTS;


  locales = [
    { id: 1, name: "Budzak" },
    { id: 2, name: "Mejdan" },
    { id: 3, name: "Centar" },
    { id: 4, name: "Starcevica" },
    { id: 5, name: "Drakulic" }
  ];
  selectedValue = null;

  constructor() { }

  ngOnInit(): void {
  }

}
