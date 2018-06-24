import {Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name = 'form details';
  form: FormGroup;
  formDetails = {
    name: '',
    email: '',
    password: ''
  };
  submitted = false;

  constructor() {
    this.createForm();
  }

  createForm(): void {
    this.form = new FormGroup({
      'name': new FormControl(this.formDetails.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'email': new FormControl(this.formDetails.email, [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl(this.formDetails.password, [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  onSubmit(): void {
    this.submitted = true;
  }

}
