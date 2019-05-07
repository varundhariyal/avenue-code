import { Component, OnInit } from '@angular/core';
import { Cookie } from "ng2-cookies/ng2-cookies";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
public firstName:string;
  constructor() {
    this.firstName=Cookie.get('receiverName')
   }
  ngOnInit() {
  }

}
