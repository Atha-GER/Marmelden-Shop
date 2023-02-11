import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BakgroundComponent } from './bakground/bakground.component';
import { LeisteNavbarComponent } from './leiste-navbar/leiste-navbar.component';
import { ShopComponent } from './shop/shop.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { DatengeberService } from 'src/DatenService/datengeber.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BakgroundComponent,
    LeisteNavbarComponent,
    ShopComponent,
    ShopCardComponent,
    WarenkorbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatengeberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
