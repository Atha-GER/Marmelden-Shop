import { Component, Input, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {



  constructor( ){
   
  }







  warenkorbBild:string = 'assets/warenkorb.png';


  Warenkorb:boolean = false;
  animationClick:boolean = false;

  


  WarenkorbAktiv(){

   this.Warenkorb = !this.Warenkorb;
   console.log(this.Warenkorb);




  }

  animationClickF(){

if(this.Warenkorb == true){

  this.animationClick = true;
  console.log('Wurde erfolgreich geschlossen');

} 
else {
  this.animationClick = false;
  
} 
}





}
