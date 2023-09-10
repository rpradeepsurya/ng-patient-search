import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  femalePic: string = "./assets/female.jpg"
  malePic: string = "./assets/male.jpg"

  private patients = [
    {
      'picture': this.femalePic,
      'name': 'Ashley Citarella',
      'nextAppointment': 'Today 9:00 am',
      'details': {
        'DOB': '07/02/1958',
        'Sex': 'Female',
        'Residence': 'Boston, MA',
        'MRN': 'YTK12345678',
        'ID Number': 'NHL12345678',
        'Last 4 digits of SSN': '0000',
        'Phone Number': '(000)-000-0000',
        'Email Address': 'ashcitarella@email.com',
        'Hospital': 'Massachusettes Medical Group',
        'Dept.': 'Department of Cardiology',
        'Physician': 'Dr. Beth Smith',
        'Conditions': 'COPD, CHF, Diabetes (Type II)'
      }
    },
    {
      'picture': this.malePic,
      'name': 'Albert Johnson',
      'nextAppointment': 'Today 10:00 pm',
      'details': {
        'DOB': '01/15/1952',
        'Sex': 'Male',
        'Residence': 'Waltham, MA',
        'MRN': 'YTK12343675',
        'ID Number': 'NHL12345678',
        'Last 4 digits of SSN': '1111',
        'Phone Number': '(111)-111-1111',
        'Email Address': 'aljohnson@email.com',
        'Hospital': 'Massachusettes Medical Group',
        'Dept.': 'Department of Cardiology',
        'Physician': 'Dr. Beth Smith',
        'Conditions': 'CHF'
      }
    },
    {
      'picture': this.femalePic,
      'name': 'Leslie Isabelle Wang',
      'nextAppointment': 'Today 11:00 pm',
      'details': {
        'DOB': '03/12/1985',
        'Sex': 'Female',
        'Residence': 'Mooselookmeguntic, ME',
        'MRN': 'YTK12343675',
        'ID Number': 'NHL12345678',
        'Last 4 digits of SSN': '2222',
        'Phone Number': '(222)-222-2222',
        'Email Address': 'lesli.isabelle.wang@email.com',
        'Hospital': 'Massachusettes Medical Group',
        'Dept.': 'Department of Cardiology',
        'Physician': 'Dr. Beth Smith',
        'Conditions': 'CHF'
      }
    },
    {
      'picture': this.femalePic,
      'name': 'Adela Bašič',
      'nextAppointment': 'Today 1:30 pm',
      'details': {
        'DOB': '03/12/1950',
        'Sex': 'Female',
        'Residence': 'Boston, MA',
        'MRN': 'YTK12343675',
        'ID Number': 'NHL12345678',
        'Last 4 digits of SSN': '333',
        'Phone Number': '(333)-333-3333',
        'Email Address': 'adelabasic50@email.com',
        'Hospital': 'Massachusettes Medical Group',
        'Dept.': 'Department of Cardiology',
        'Physician': 'Dr. Beth Smith',
        'Conditions': 'CHF'
      }
    },
    {
      'picture': this.malePic,
      'name': 'Reza Saatchi',
      'nextAppointment': 'Today 2:30 pm',
      'details': {
        'DOB': '03/12/1957',
        'Sex': 'Male',
        'Residence': 'Boston, MA',
        'MRN': 'YTK12343675',
        'ID Number': 'NHL12345678',
        'Last 4 digits of SSN': '4444',
        'Phone Number': '(444)-444-4444',
        'Email Address': 'linda@gmail.com',
        'Hospital': 'Massachusettes Medical Group',
        'Dept.': 'Department of Cardiology',
        'Physician': 'Dr. Beth Smith',
        'Conditions': 'CHF'
      }
    },
    {
      'picture': this.malePic,
      'name': 'Arjun Chandrasekar',
      'nextAppointment': 'Today 3:30 pm',
      'details': {
        'DOB': '03/12/1958',
        'Sex': 'Male',
        'Residence': 'New York City, NY',
        'MRN': 'YTK12343675',
        'ID Number': 'NHL12345678',
        'Last 4 digits of SSN': '5555',
        'Phone Number': '(555)-555-5555',
        'Email Address': 'arjunchandra@gmail.com',
        'Hospital': 'Massachusettes Medical Group',
        'Dept.': 'Department of Cardiology',
        'Physician': 'Dr. Beth Smith',
        'Conditions': 'CHF'
      }
    }
  ];

  constructor() { }

  getTodaysPatients(): any[] {
    return this.patients;
  }

  // filter records based on search input
  searchPatients(criteria: any): any {
    return this.patients.filter(patient => {

      let firstNameMatch = !criteria.firstName ||
        patient.name.toLowerCase().includes(criteria.firstName.toLowerCase());

      let lastNameMatch = !criteria.lastName ||
        patient.name.toLowerCase().includes(criteria.lastName.toLowerCase());

      let patientDOB = patient.details.DOB.split('/').reverse().join('-');
      let criteriaDOBParts = criteria.dob.split('-');
      let rearrangedCriteriaDOB = criteriaDOBParts[0] + '-' + criteriaDOBParts[2] + '-' + criteriaDOBParts[1];
      let dobMatch = !criteria.dob || patientDOB === rearrangedCriteriaDOB;

      // Assuming nextAppointment is in MM/DD/YYYY format; Convert it for comparison
      let patientAppointment = patient.nextAppointment.split(" ")[1].split('/').reverse().join('-');
      // Check for start date and end date
      let startDateMatch = !criteria.startDate || new Date() >= new Date(criteria.startDate);
      let endDateMatch = !criteria.endDate || new Date() <= new Date(criteria.endDate);

      return firstNameMatch && lastNameMatch && dobMatch && startDateMatch && endDateMatch;
    });
  }
}
