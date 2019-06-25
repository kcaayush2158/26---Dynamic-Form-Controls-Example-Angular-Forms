import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators ,FormArray} from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import{PasswordValidator} from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registrationForm :FormGroup;

  constructor(private fb:FormBuilder){}

  get Username(){
    return this.registrationForm.get('username');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail(){
    return this.alternateEmails.push(this.fb.control(''))
  }
  ngOnInit(){
    this.registrationForm = this.fb.group({
      username:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
      subscribe:[false],
      email:[''],
      password:[''],
      repassword:[''],
      address:this.fb.group({
        city:[''],
        state:[''],
        postalcode:['']
      }),alternateEmails :this.fb.array([])
    },{validator :PasswordValidator});
  
    this.registrationForm.get('subscribe').valueChanges
    .subscribe(checkedValue=>{
      const email = this.registrationForm.get('email');
      if(checkedValue){
        email.setValidators(Validators.required);
      }else{
        email.clearValidators();
      }
      email.updateValueAndValidity();
    });
  

  }



  


loadApiData(){
  console.log('cliick');
  this.registrationForm.patchValue({
    username:'Bruce',
    password:'apple',
    repassword:'apple'
  });
}
}
