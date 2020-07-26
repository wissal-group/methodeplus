import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ModalDirective } from 'ng-uikit-pro-standard';
import { ModalService } from '../services/modal.service';

declare var $:any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   title = 'angulartest';
  showModal: boolean;
  
  registerForm: FormGroup ;
  //formulaireForm: FormGroup;
  
  iSubmitted = false;

  fSubmitted = false;
  Radio_List = [
    { name: "Cours d'arabe enfants", value: ' 100CP ', checked: false },
    { name: "Cours d'arabe adultes", value: ' 101TR', checked: false },
    { name: "Cours de coran", value: ' 102MO', checked: false },
    { name: "Cours d'islam", value: '103BE', checked: false },
  ];

  @ViewChild('basicModal') basicModal: ModalDirective;

  constructor(private formBuilder: FormBuilder,private modalService:ModalService) { }

  show()
  {
    this.showModal = true; 
    
  }
  
  hide()
  {
    this.showModal = false;
  }

  ngOnInit() {

$('.modal').on('hidden.bs.modal', function () {
    if($(".modal:visible").length > 0) {
        setTimeout(function() {
            $('body').addClass('modal-open');
        },10)
    }
});

    this.modalService.setModal(this.basicModal);
    let getCheckedRadio = null
    this.Radio_List.forEach(o => {
      if (o.checked)
        getCheckedRadio = o.value;
    })

    this.registerForm = this.formBuilder.group({
      inscriptionForm : this.formBuilder.group({
      selectedOptions: [getCheckedRadio, [Validators.required]],
      firstname: ['', [Validators.required, Validators.minLength(6)]],
      lastname: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(10)]],
      date: ['', [Validators.required, this.dateValidator]]
  }),

        formulaireForm : this.formBuilder.group({
      adress : ['', [Validators.required, Validators.minLength(6)]],
      city: ['', [Validators.required, Validators.minLength(6)]],
      postal_code: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(4)]]

    })
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
  public removeValidators() {
    for (const key in (<FormGroup>this.registerForm.get('inscriptionForm')).controls ) {
      this.inscriptionForm.get(key).clearValidators();
      this.inscriptionForm.get(key).updateValueAndValidity();
 }

     for (const key in (<FormGroup>this.registerForm.get('formulaireForm')).controls ) {
      this.formulaireForm.get(key).clearValidators();
      this.formulaireForm.get(key).updateValueAndValidity();
}
}
  validationType = {
   'selectedOptions':[Validators.required],
   'firstname': [Validators.required, Validators.minLength(6)],
   'lastname': [Validators.required, Validators.minLength(6)],
   'email': [Validators.required, Validators.email],
   'mobile': [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(10)],
   'date':  [Validators.required, this.dateValidator]
  }
  validationType2 = {
    'adress': [Validators.required, Validators.minLength(6)],
    'city': [Validators.required, Validators.minLength(6)],
    'postal_code': [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(4)]
    }
  public addValidators2() {
      for (const key in (<FormGroup>this.registerForm.get('formulaireForm')).controls) {
        this.formulaireForm.get(key).setValidators(this.validationType2[key]);
        this.formulaireForm.get(key).updateValueAndValidity();
     }
  }
  public addValidators() {
    for (const key in (<FormGroup>this.registerForm.get('inscriptionForm')).controls) {
         this.inscriptionForm.get(key).setValidators(this.validationType[key]);
         this.inscriptionForm.get(key).updateValueAndValidity();
    } 
  }
onReset() {
  this.iSubmitted = false;
  this.registerForm.reset();
}

//open() {
 //this.modaled.nativeElement.open();
  //}
get f() { return (<FormGroup>this.registerForm.get('inscriptionForm')).controls; }

get ff() { return (<FormGroup>this.registerForm.get('formulaireForm')).controls; }

get inscriptionForm() {
  return this.registerForm.get('inscriptionForm');
}

get formulaireForm() {
  return this.registerForm.get('formulaireForm');
}

onSubmit1() {
    this.iSubmitted = true;
    if (this.registerForm.invalid  ){
      return;
    }
    if(this.iSubmitted)
    {
      this.showModal = false;
    }
}
onSubmit2() {
  this.fSubmitted = true;
  if (this.registerForm.invalid){
    return;
  }
  if(this.fSubmitted)
  {
    this.showModal = false;
  }
}
}