import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router';
import{MyServService} from '../../services/my-serv.service'
import {Geo} from '../../classes/geo';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})

export class BaseComponent implements OnInit {

  constructor(private MyServ: MyServService, private router: Router) { }

  ngOnInit(): void {
  }

  distance :number = 0.0;

  onSendGeo(data:Geo){

    //זמני, עד שהסרבר יעבוד היטב
    this.router.navigate(['/displayDistance']);
    this.MyServ.getDistance(data.source, data.destination).subscribe(
      data=>{
        this.distance = data;
        //if return data - navigate to view distance:
        //this.router.navigate(["/displayDistance"]);
        },
        error => {
          console.log("error...");
        }
      );
  }
}
