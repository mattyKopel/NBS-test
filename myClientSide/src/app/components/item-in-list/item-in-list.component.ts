import { Component, OnInit, Input } from '@angular/core';
import { Geo } from '../../classes/geo'

@Component({
  selector: 'app-item-in-list',
  templateUrl: './item-in-list.component.html',
  styleUrls: ['./item-in-list.component.scss']
})
export class ItemInListComponent implements OnInit {

  @Input() source = 'מוצא';
  @Input() destination = 'יעד';
  @Input() requests = 'בקשות';
  @Input() dataItem : Geo;

  constructor() { }

  ngOnInit(): void {
  }

}
