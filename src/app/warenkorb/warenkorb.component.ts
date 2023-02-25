import { Component, Input, Output } from '@angular/core';
import { DatengeberService } from 'src/DatenService/datengeber.service';

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.scss'],
  
})
export class WarenkorbComponent {

Artikel?:string;
 Kosten?:number;
Anzahl?:number;


constructor(public  dg:DatengeberService){}





}
