import { outputAst } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import * as internal from 'stream';
import { DatengeberService } from 'src/DatenService/datengeber.service';
import { threadId } from 'worker_threads';




@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent {




  @Input()  name:string = '';
  @Input()  img:string = '';
  @Input()  preis:number = 0;


  


Produkt:{name:string, bild:string, preis:number}[] = [
  {name: 'Cosiness', bild: 'assets/glas1.png', preis: 5},
  {name: 'Intesity', bild: 'assets/glas2.png', preis: 7},
  {name: 'Passion', bild: 'assets/glas3.png',  preis: 9},
  {name: 'Intesity', bild: 'assets/glas2.png', preis: 7},
  {name: 'Cosiness', bild: 'assets/glas1.png', preis: 5},
  {name: 'Passion', bild: 'assets/glas3.png',  preis: 9},
  {name: 'Passion', bild: 'assets/glas3.png',  preis: 9},
  {name: 'Intesity', bild: 'assets/glas2.png', preis: 7},
  
]






 public index: number;


 constructor(public dg: DatengeberService) { 
 this.index = this.dg.cardAnzahlen.length;
 this.dg.cardAnzahlen.push(0);
 
}

get cardAnzahl() {
  return this.dg.cardAnzahlen[this.index];
}

set cardAnzahl(Zahl: number) {
  this.dg.cardAnzahlen[this.index] = Zahl;
}


  CardAnzahlPlus(){
   
    this.cardAnzahl = this.cardAnzahl + 1;

  
      }
    
    
      CardAnzahlMinus(){
    
        
    if(this.cardAnzahl == 0){
    
      this.cardAnzahl = 0;
    
    } else{
      this.cardAnzahl = this.cardAnzahl - 1;
    }
    
    
          }







   


  
}
