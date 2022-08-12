import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormControl,FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  title = 'FORM'

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    tel: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });


  public churchForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.churchForm = this._fb.group({
      churches: this._fb.array([this.addChurchGroup()])
    });
  }

  //Append Fields Set
  private addChurchGroup(): FormGroup {
    return this._fb.group({
      churchName: [],
      street: [],
      city: [],
      state: [],
      zip: [],
      pastorName: [],
      courtesy: [],
    });
  }


    //Add Fields
    addChurch(): void {
      this.churchArray.push(this.addChurchGroup());

    }
   
    //Remove Fields
    removeChurch(index: number): void {
      this.churchArray.removeAt(index);
    } 

    //Fields Array
    get churchArray(): FormArray {
      return <FormArray>this.churchForm.get('churches');
    }    

  ngOnInit() {
    this.profileForm = new FormGroup({

    });


  }
  
  onSubmit(): void{
    console.log(this.profileForm);
  }
}
