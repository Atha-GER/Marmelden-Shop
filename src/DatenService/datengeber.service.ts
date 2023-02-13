import { Injectable } from '@angular/core';
import { first } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class DatengeberService {

  cardAnzahlen: number[] = [];

WarenkorbAnzahl:number = 0;
ZwischenAnzahl:number= 0;

FirstAdd?:boolean;



  constructor() {}


  AddToWarenkorb(x:number){

    this.FirstAdd = true;
    console.log('Erster Warenkorb wurde hinzugefügt, FirstAdd ist nun True')

if(this.FirstAdd == true){

this.ZwischenAnzahl = this.cardAnzahlen[x];
console.log( 'Die Card-Anzahl ist nun:' + this.cardAnzahlen[x]);

this.WarenkorbAnzahl = this.ZwischenAnzahl;

this.FirstAdd = false;
console.log('FirstAdd ist wieder' + ' '+ this.FirstAdd)
console.log('Zwischen' + this.ZwischenAnzahl)

}

return this.ZwischenAnzahl = this.cardAnzahlen[x]

  }


  AddToWarenkorbSecond(x:number, cardAnzahl:number){


    if(this.FirstAdd == false){


      this.WarenkorbAnzahl += cardAnzahl;
  
    }

    
  

  }






}
