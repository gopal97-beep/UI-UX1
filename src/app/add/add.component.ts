import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpclientserviceService } from '../httpclientservice.service';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  user: User;
  constructor(private formBuilder:FormBuilder ,private http: HttpClient,private httpservice:HttpclientserviceService ,private route:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],
      gender:''
  });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    alert('User created successfully')
    console.log(this.registerForm.value.gender)
    this.submit()
  this.route.navigateByUrl('/',{skipLocationChange:true}).then(()=>{this.route.navigate(['add'])});
}

get name1():AbstractControl{
  return this.registerForm.get("username")
}
get email1():AbstractControl{
  return this.registerForm.get("email")
}
get phone1():AbstractControl{
  return this.registerForm.get("phone")
}
get gender():AbstractControl{
  return this.registerForm.get("gender")
}
get dob():AbstractControl{
  return this.registerForm.get("dob")
}

submit(){
  console.log("ok") 
  this.user=new User(this.name1.value,this.email1.value,this.phone1.value,this.gender.value,this.dob.value );
  console.log(this.user)
  this.httpservice.addprofile(this.user).subscribe(data=>console.log(data));
}
}



  



