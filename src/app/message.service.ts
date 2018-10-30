import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message:Message;
  private _url : string = "http://localhost:8080/EmailManagement/admin/MessagesServlet";

  

  constructor(private _http:HttpClient) { }


  getMessages():Observable<Message[]>
  {
    return this._http.get<Message[]>(this._url);
  }

  getMessage(MessageId:number):Observable<Message>
  {
    let msg_url= "http://localhost:8080/EmailManagement/admin/MessageServlet?msgid="+MessageId;
    
      return this._http.get<Message>(msg_url);

  }
}
