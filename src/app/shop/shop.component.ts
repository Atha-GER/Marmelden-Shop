import { Component } from '@angular/core';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  name:string = '';
   img:string = '';
   preis:number = 0;

   Produkt:any = [
    {name: 'Cosiness', bild: 'assets/glas1.png', preis: 5},
    {name: 'Intesity', bild: 'assets/glas2.png', preis: 7},
    {name: 'Passion', bild: 'assets/glas3.png',  preis: 9},
    {name: 'Intesity', bild: 'assets/glas2.png', preis: 7},
    {name: 'Cosiness', bild: 'assets/glas1.png', preis: 5},
    {name: 'Passion', bild: 'assets/glas3.png',  preis: 9},
    {name: 'Passion', bild: 'assets/glas3.png',  preis: 9},
    {name: 'Intesity', bild: 'assets/glas2.png', preis: 7},
    
  ]




  





  constructor(){}

  
}
