import { Component, OnInit } from '@angular/core';
import { SharedService } from '../utility/shared.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  RestList: any = [];
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getRestDetails();
  }

  getRestDetails() {
    this.service.getRestList().subscribe(data => {
      this.RestList = data;
    })
  }

}
