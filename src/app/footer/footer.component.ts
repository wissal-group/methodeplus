import { Component, OnInit } from '@angular/core';
import { contact } from '../models/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{ContactService} from '../services/contact.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contacts:contact[];
  contact = new contact();
  contactForm: FormGroup;

  submitted = false;
  constructor(private formBuilder: FormBuilder,private contactService:ContactService) { }

  onSave(){
    if (this.contactForm.invalid){
      return;
      }else{
    this.contactService.saveContact(this.contactForm.value)
    .subscribe(data => {
      console.log(data)
    })   
  }
}
 
    removeValidators(){
    for (const key in (this.contactForm.controls) ) {
    this.contactForm.clearValidators();
    this.contactForm.updateValueAndValidity();
    } 
  }
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],    
  });
  }

  get f() { return this.contactForm.controls ; }
 
  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid){
      return;
    }
    if(this.submitted)
    {
      this.submitted = false;
      this.contactForm.reset();
    }
  }
}
