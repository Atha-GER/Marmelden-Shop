import { Component, Input, Output } from '@angular/core';
import { DatengeberService } from 'src/DatenService/datengeber.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {



  constructor(public  dg:DatengeberService ){
   
  }







  warenkorbBild:string = 'assets/warenkorb.png';


  Warenkorb:boolean = false;
  animationClick:boolean = false;

  


  WarenkorbAktiv(){

   this.Warenkorb = !this.Warenkorb;
   console.log(this.Warenkorb);

   console.log(this.dg.cardAnzahlen)


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
