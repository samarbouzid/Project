import { Patient } from './../../shared/patient.model';
import { PatientService } from './../../shared/patient.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-patient-list',
    templateUrl: './patient-list.component.html',
    styles: []
  })
export class PatientListComponent implements OnInit {

  constructor(private service: PatientService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(p: Patient) {
    this.service.formData = Object.assign({}, p);
  }

  onDelete(Id) {
    if (confirm('Voulez-vous vraiment supprimer cet enregistrement ?')) {
      this.service.DelPatient(Id)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Supprimé avec succès', 'Patient');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }
}