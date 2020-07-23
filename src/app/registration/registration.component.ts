import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
declare var $:any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   title = 'angulartest';
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  //@ViewChild('modaled') modaled:ElementRef;

  Radio_List = [
    { name: "Cours d'arabe enfants", value: ' 100CP ', checked: false },
    { name: "Cours d'arabe adultes", value: ' 101TR', checked: false },
    { name: "Cours de coran", value: ' 102MO', checked: false },
    { name: "Cours d'islam", value: '103BE', checked: false },

  ];

  constructor(private formBuilder: FormBuilder) { }


  show()
  {
    this.showModal = true; 
    
  }
  hide()
  {
    this.showModal = false;
  }
  //openModal(){ $("#myModal").modal("show"); }


  ngOnInit() {
    let getCheckedRadio = null
    this.Radio_List.forEach(o => {
      if (o.checked)
        getCheckedRadio = o.value;
    })

    this.registerForm = this.formBuilder.group({
    selectedOptions: [getCheckedRadio, [Validators.required]],
      firstname: ['', [Validators.required, Validators.minLength(6)]],
      lastname: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(10)]],
      date: ['', [Validators.required, this.dateValidator]]
  });
  }
  dateValidator(c: AbstractControl): { [key: string]: boolean } {
    let value = c.value;
    if (value && typeof value === "string") {
      let match = value.match(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
      if (!match) {
        return { 'dateInvalid': true };
      } else if (match && match[0] !== value) {
        return { 'dateInvalid': true };
      }
    }
    return null;
  }
//open() {
 //this.modaled.nativeElement.open();
  //}
get f() { return this.registerForm.controls; }
onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.showModal = false;
    }
}  
}