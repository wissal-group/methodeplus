import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ModalDirective } from 'ng-uikit-pro-standard';
import { ModalService } from '../services/modals/modal.service';
import { ApprenantsService } from "../services/apprenant/ApprenantsService";
declare var $:any;

import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale, frLocale } from 'ngx-bootstrap/chronos';
import { user } from '../models/user';
import { DatePipe } from '@angular/common';

defineLocale('fr', frLocale);

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  apprenants:user[];
  user = new user();

  radioSel=new Date();

  showModal: boolean;
  registerForm: FormGroup ;
  //formulaireForm: FormGroup;
  isOpen = false;
  iSubmitted = false;

  fSubmitted = false;
  Radio_List = [
    { name: "Cours d'arabe enfants", value: "Cours d'arabe enfants", checked: false },
    { name: "Cours d'arabe adultes", value: "Cours d'arabe adultes", checked: false },
    { name: "Cours de coran", value: "Cours de coran", checked: false },
    { name: "Cours d'islam", value: "Cours d'islam", checked: false },
  ];

  @ViewChild('basicModal') basicModal: ModalDirective;
  minDate: Date;
  maxDate: Date;

  constructor(private formBuilder: FormBuilder,
              private modalService:ModalService,
              private ApprenantsService :ApprenantsService,
              private bsLocaleService: BsLocaleService) {

    this.bsLocaleService.use('fr');
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() - 730);
    console.log(this.maxDate.toDateString());
   // alert(this.maxDate.toISOString().slice(0,10));
  }
/*--
  show()
  {
    this.showModal = true;

  }

  hide()
  {
    this.showModal = false;
  }
-->*/
  onSave(){
    for (const key in (<FormGroup>this.registerForm.get('inscriptionForm')).value ) {
      if (this.inscriptionForm.get(key).value==null){
    return;
    }
  }
    this.ApprenantsService.saveApprenant((<FormGroup>this.registerForm.get('inscriptionForm')).value)
    .subscribe(data => {
      console.log(JSON.stringify(data));
      this.onReset();
      document.getElementById('annuler').click();
      alert("souscription avec succès");
    })
}

  ngOnInit() {

    //pour empechér le défilement de body
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
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^-?([0-9.+]\d*)?$/), Validators.minLength(8)]],
      date: ['', [Validators.required]]
  }),

    formulaireForm : this.formBuilder.group({
      adress : ['', [Validators.required, Validators.minLength(6)]],
      city: ['', [Validators.required, Validators.minLength(6)]],
      postal_code: ['', [Validators.required, Validators.minLength(4)]]

    })
    });

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
   'firstname': [Validators.required],
   'lastname': [Validators.required],
   'email': [Validators.required, Validators.email],
   'mobile': [Validators.required, Validators.pattern(/^-?([0-9.+]\d*)?$/), Validators.minLength(8)],
   'date':  [Validators.required]
  }
  validationType2 = {
    'adress': [Validators.required],
    'city': [Validators.required],
    'postal_code': [Validators.required,  Validators.minLength(4)]
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

    if(this.registerForm.invalid && this.registerForm.pristine) {
        return;
      // alert(this.scheduler);
        /* Any API call logic via services goes here */
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
