import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'search-patients';
  patients: any = [];
  searchResults = [];
  activeTab: string = 'todays';

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patients = this.patientService.getTodaysPatients();
  }

  onSearch(criteria: any) {
    this.searchResults = this.patientService.searchPatients(criteria);
    this.activeTab = 'results';
  }
}
