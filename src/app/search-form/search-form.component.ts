import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchForm!: FormGroup;
  @Output() searchRequested = new EventEmitter<any>();
  isButtonEnabled: boolean = false;
  searchAll: string = "";
  activeTab: string = 'basic';
  today = new Date().toISOString().split('T')[0];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      dob: [''],
      startDate: [''],
      endDate: [''],
    });

    this.searchForm.valueChanges.subscribe(values => {
      this.isButtonEnabled = Object.values(values).some(val => !!val);
    });
  }

  search() {
    this.searchRequested.emit(this.searchForm.value);
  }
}
