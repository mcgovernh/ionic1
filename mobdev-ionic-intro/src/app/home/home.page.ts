import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(){}
  btnClicked(){
    alert("Don't click me!!");
  }
  tutorialShown = false;
  myVariable: string = 'The force is with me!'; 
  myVariable2: string = 'The force is very special with me!'; 
  updateMyValue() {         this.myVariable = 'Now the force is even stronger!';     }
  updateMyValue2() {        this.myVariable2 = 'Now the force is even super strong!';     } }



  
