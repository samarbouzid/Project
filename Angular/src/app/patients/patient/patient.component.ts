import { PatientService } from './../../shared/patient.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styles: []
  })
export class PatientComponent implements OnInit {

    constructor(private service: PatientService,
        private toastr: ToastrService) { }
    
      ngOnInit() {
        this.resetForm();
      }
      resetForm(form?: NgForm) {
        if (form != null)
          form.form.reset();
        this.service.formData = {
          Id: 0,
          Name: '',
          AfterName: '',
          Phone :'',
          Adress :'',
          BirthDate: '',
          isActive: false
        }
      }
      onSubmit(form: NgForm) {
        if (this.service.formData.Id == 0)
          this.insertRecord(form);
        else
          this.updateRecord(form);
      }
      insertRecord(form: NgForm) {
        this.service.UpdatePatient().subscribe(
          res => {
            debugger;
            this.resetForm(form);
            this.toastr.success('Succès', 'Patient mis à jour');
            this.service.refreshList();
          },
          err => {
            debugger;
            console.log(err);
          }
        )
      }
      updateRecord(form: NgForm) {
        this.service.CreatePatient().subscribe(
          res => {
            this.resetForm(form);
            this.toastr.info('Succès', 'Patient enregistré');
            this.service.refreshList();
          },
          err => {
            console.log(err);
          }
        )
      }
}