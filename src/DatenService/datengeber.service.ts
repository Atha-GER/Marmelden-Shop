import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { WarenkorbComponent } from 'src/app/warenkorb/warenkorb.component';




@Injectable({
  providedIn: 'root'
})


export class DatengeberService {

cardAnzahlen: number[] = [];
WarenkorbAnzahl:number = 0;
ZwischenAnzahl:number= 0;


KostenStartBetrag:number =0;
KostenZwischenBetrag:number=0;
KostenAbsolut:number = 0;




constructor(){
}




KostenRechner(cardAnzahl:number, ProduktIndex:number){

  this.KostenStartBetrag = this.KostenStartBetrag + cardAnzahl * ProduktIndex;
  this.KostenAbsolut = this.KostenStartBetrag;



}


  AddToWarenkorb(cardAnzahl:number){

  
    this.ZwischenAnzahl = this.ZwischenAnzahl+ cardAnzahl;
    this.WarenkorbAnzahl = this.ZwischenAnzahl;


   

    return this.ZwischenAnzahl;

  }

  ClearWarenkorbAnzahl(){

    this.WarenkorbAnzahl = this.WarenkorbAnzahl - this.WarenkorbAnzahl;
  }

}
