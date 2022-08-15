import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Form Validate 
  
  submitted = false;

  responseData: any;
  
  constructor(private service:AuthService, private route:Router

  ){
    localStorage.clear();
  }
  
  //Add user form actions
  get f() { return this.loginForm.controls; }

  ProceedLogin() {

    if(this.loginForm.valid){
      this.service.proceedLogin(this.loginForm.value).subscribe(result=>{
        // if (result!=null){
        //   this.responseData = result;
        //   localStorage.setItem('token', this.responseData.jwtToken);
        //   this.route.navigate([''])
        // }

        // if(result.success){
        //   console.log(result)
        //   alert(result.message);
        // }
        // else {
        //   alert(result.message);
        // }

        console.log(result)
        localStorage.setItem('token', result.token)
        this.route.navigate(['/message'])
        alert(result.message)
      })
    }
  
  // this.submitted = true;
  
  // //stop here if form is invalid
  // if (this.loginForm.invalid) {
  //     return;
  // }
  
  // //True if all the fields are filled
  // if(this.submitted)
  // {
  //   alert("Great!!");
  // }
 
}
  ngOnInit():void {
    //Add User form validations
    // this.loginForm = this.formBuilder.group({
    
    // });
  }

  loginForm =  new FormGroup({
    username: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  // public get username() { return this.loginForm.get('username'); }
  // public get password() { return this.loginForm.get('password'); }

}