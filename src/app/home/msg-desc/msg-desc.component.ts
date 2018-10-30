import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-msg-desc',
  templateUrl: './msg-desc.component.html',
  styleUrls: ['./msg-desc.component.css']
})
export class MsgDescComponent implements OnInit {

  private message;

  private noMsg:boolean;

  private id;
  constructor(private _router:ActivatedRoute,private _messageService:MessageService) { }

  ngOnInit() {

    this.noMsg = true;


    this._router.url.subscribe(() =>{
      this.onRouteChange()
    })
   

  }

  onRouteChange()
  {
    this.noMsg = false;

    this.id = this._router.snapshot.paramMap.get("id");


    

    this._messageService.getMessage(this.id)
        .subscribe(data => this.message = data );



    console.log(this.id)
    // console.log(JSON.stringify(this.message))

  }

}
