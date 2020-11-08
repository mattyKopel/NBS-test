import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-data',
  templateUrl: './item-data.component.html',
  styleUrls: ['./item-data.component.scss']
})
export class ItemDataComponent implements OnInit {

  @Input() data : string;
  @Input() dataType : string;

  constructor() { }

  ngOnInit(): void {
  }

}
