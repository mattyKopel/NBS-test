import { Component, OnInit,Output, EventEmitter } from '@angular/core';

import {Geo} from  '../../classes/geo';
@Component({
  selector: 'app-send-places',
  templateUrl: './send-places.component.html',
  styleUrls: ['./send-places.component.scss']
})
export class SendPlacesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() sendGeo = new EventEmitter<Geo>();

  onClickButton(home, destination){
    this.sendGeo.emit({
      source: home.value,
      destination: destination.value,
      hits: 0,
      distance: 0
    });
  }
}
