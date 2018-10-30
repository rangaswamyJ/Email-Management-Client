import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  department= [
    {
      no:100,
      name:"name1"
    },
    {
      no:101,
      name:"name2"
    },
    {
      no:102,
      name:"name3"
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
