import {Component, Input, OnInit} from '@angular/core';
import {Shop} from "../models/Shop";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input()
  receivedParentMessage: Shop;

  constructor() { }

  ngOnInit(): void {
  }

}
