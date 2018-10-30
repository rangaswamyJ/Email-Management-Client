import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-msg-list',
  templateUrl: './msg-list.component.html',
  styleUrls: ['./msg-list.component.css']
})
export class MsgListComponent implements OnInit {

  messages : Message[];
  constructor(private _messageService:MessageService) { }

  ngOnInit() {
    this._messageService.getMessages()
        .subscribe(data => this.messages = data);

        
  }

}
