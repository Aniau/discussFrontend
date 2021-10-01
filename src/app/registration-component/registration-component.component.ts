import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { AuthServiceService } from '../service/auth-service.service';
import { Validation } from '../utils/validation';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit
 {

  public form: FormGroup;

  constructor(private AuthServiceService: AuthServiceService,private formBuilder: FormBuilder) { }

  ngOnInit(): void 
  {
    this.form = this.formBuilder.group({
      login: [null,Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    },
    {
      validators: [Validation.match('password','confirmPassword')]
    });
  }

  registration() :void
  {
    if(this.form.valid == true)
    {
      console.log('ok');
      this.AuthServiceService.register(this.form.get('login')?.value,this.form.get('password')?.value,this.form.get('email')?.value).subscribe(value =>
      {
        console.log(value);
      });
    }
    else
    {
      console.log('error');
    }
  }

}
