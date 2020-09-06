import { Component } from '@angular/core';
import {Shop} from "./models/Shop";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fahrplan-app';

  selectedShopTime: Shop;

  zeitChanged(time: Shop) {

    this.selectedShopTime = time;

  }
}
