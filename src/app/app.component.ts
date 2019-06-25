import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CreatingTheFormModel';
  constructor(private fb:FormBuilder){

  }
  get Username(){
    return this.registrationForm.get('username');
  }
  registrationForm = this.fb.group({
    username:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
    password:[''],
    repassword:[''],
    address:this.fb.group({
      city:[''],
      state:[''],
      postalcode:['']
    })

  })
    loadApiData(){
      console.log('cliick');
      this.registrationForm.patchValue({
        username:'Bruce',
        password:'apple',
        repassword:'apple'
      });
    }
}
