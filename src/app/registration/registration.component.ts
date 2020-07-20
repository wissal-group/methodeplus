import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   title = 'angulartoastr';
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
    show()
  {
    this.showModal = true; 
    
  }
  hide()
  {
    this.showModal = false;
  }

  ngOnInit() {
	          this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            mobile: ['', Validators.required]
        });
  }
  
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
