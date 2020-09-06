import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ShopService} from "../services/shop.service";
import {Shop} from "../models/Shop";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  shops: Shop[];

  @Output() shopZeitFest = new EventEmitter<Shop>();

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.shopService.getAll().subscribe(data => {
      this.shops = data;
    });
  }

  saveStringWhenClick(shopZeit) {
    this.shopZeitFest.emit(shopZeit);
    console.log(this.shopZeitFest);
  }

}
