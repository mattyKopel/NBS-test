import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-distance',
  templateUrl: './display-distance.component.html',
  styleUrls: ['./display-distance.component.scss']
})
export class DisplayDistanceComponent implements OnInit {
  @Input() distance : number;
  constructor() { }

  ngOnInit(): void {
  }

}
