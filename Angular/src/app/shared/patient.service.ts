import { Patient } from './patient.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
  export class PatientService {
    formData: Patient;
    readonly rootURL = 'http://localhost:44303/api';
    list : Patient[];
    constructor(private http: HttpClient) { }

    CreatePatient() {
      return this.http.post(this.rootURL + '/Patient', this.formData);
    }
    UpdatePatient() {
      return this.http.put(this.rootURL + '/Patient/'+ this.formData.Id, this.formData);
    }
    DelPatient(id) {
      return this.http.delete(this.rootURL + '/Patient/'+ id);
    }
  
    refreshList(){
      this.http.get(this.rootURL + '/Patient')
      .toPromise()
      .then(res => this.list = res as Patient[]);
    }
  }