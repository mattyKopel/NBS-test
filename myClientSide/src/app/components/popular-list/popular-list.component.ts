import { Component, OnInit, Input } from '@angular/core';
import {Geo} from '../../classes/geo';
import {OrderByPipe} from "../../pipes/order-by.pipe";

@Component({
  selector: 'app-popular-list',
  templateUrl: './popular-list.component.html',
  styleUrls: ['./popular-list.component.scss'],
  
})
export class PopularListComponent implements OnInit {

  constructor() { }

  myArray: Array<Geo> = [
    { source: 'ירושלים',
      destination:'תל אביב',
      hits: 32,
      distance: 120},
    { source: 'ירושלים', 
      destination: 'ערד',
      hits: 23,
      distance: 450.6},
    { source: 'תל אביב', 
      destination: 'חולון',
      hits: 5,
      distance: 23}, 
    { source: 'כפר סבא', 
      destination: 'מחסיה',
      hits: 22,
      distance: 235},
    { source: 'מטולה', 
      destination: 'אילת',
      hits: 11,
      distance: 1050},
    { source: 'בית שמש', 
      destination: 'ירושלים',
      hits: 24,
      distance: 20.34}
  ]


  ngOnInit(): void {
  }

}
