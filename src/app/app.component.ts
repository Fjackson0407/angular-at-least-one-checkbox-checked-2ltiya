 import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import {requireCheckboxesToBeCheckedValidator} from './require-checkboxes-to-be-checked.validator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  form = new FormGroup({
    myInput: new FormControl('', [Validators.required, Validators.email]),
    // ...more form controls...
    myCheckboxGroup: new FormGroup({
      myCheckbox1: new FormControl(false),
      myCheckbox2: new FormControl(false),
      myCheckbox3: new FormControl(false),
    }, requireCheckboxesToBeCheckedValidator()),
    // ...more form controls...
    mySingleCheckbox: new FormControl(false, [Validators.requiredTrue]),
  });

  ngOnInit() {

  }
}
