import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.scss']
})
export class PatientRecordComponent implements OnInit, OnChanges {

  @Input() patient!: {
    picture: string;
    name: string;
    nextAppointment: string;
    details: {
      [key: string]: string;
    };
  };

  @Input() recordIndex: number = 0;
  @Input() totalRecords: number = 0;
  isFirstRecord: boolean = false;
  isLastRecord: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    this.isFirstRecord = this.recordIndex === 0;
    this.isLastRecord = this.recordIndex === this.totalRecords - 1;
  }

}
