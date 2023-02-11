import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  MarmeladeBild:string = "assets/Marmelade.jpg"


  @Input() Hallo:string = 'hey';

}
