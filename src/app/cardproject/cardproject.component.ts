import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


@Component({
  selector: 'app-cardproject',
  standalone: true,
  imports: [NgFor,FormsModule,MatCardModule,MatSlideToggle,MatFormFieldModule,MatSelectModule,MatOptionModule,MatOptionModule,NgIf,NgClass],
  templateUrl: './cardproject.component.html',
  styleUrl: './cardproject.component.css'
})

export class CardprojectComponent implements OnInit {
  ngOnInit() {
    this.showdropdown
  }
  //  planName: any;
  // features: any;
  // monthlyPrice: any;
  //  annualPrice: any;
  isYearly: boolean = true;
  showdropdown=true;
prices=[
  {
  title:'Starter',
  monthlyPrice:'$19',
  yearlyPrice:'100/year',
  feature1:'500MAUs',
  feature2:'projects',
  feature3:'Unlimited',
  feature4: 'flows',
  feature5:'Unlimited',
  button:'Choose plan'

  },
  {
    title:'Pro',
    monthlyPrice:'$99/month',
    yearlyPrice:'100/year',
    feature1:'All starter,plus;',
  feature2:'unlimited projects',
  feature3:'Unlimted fully customizable themes',
  feature4: 'A dedicated Cusomer Sucess Manager',
  feature5:'Unlimited',
  button:'Choose Plan'

    },
    {
      title:'Enterprise',
      monthlyPrice:'Lets Talk!',
      yearlyPrice:'100/year',
      feature1:'500MAUs',
  feature2:'All pro features',
  feature3:'Unlimited MAUs',
  feature4: 'Dedicated environment',
  feature5:'Premium support and services',
  button:'Contact us'
      }

];
dropdownfunction(index:number):boolean{
  return index===1

}
buttonClicked:number=-1
togglebutton(i:number){
  if(this.buttonClicked===(i+2)){
    this.buttonClicked=-1

  }else{
    this.buttonClicked=i+2;
  }

}

}
