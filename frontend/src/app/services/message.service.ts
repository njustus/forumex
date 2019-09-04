import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../../../../interfaces';
import { testUser } from './index';
import { FormMessage } from '../models/index';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private readonly http: HttpClient) { }

  forThread(id:string, page:number=0): Observable<Message[]> {
    const url = new URL(`api/threads/${id}/messages`, location.origin)
    url.searchParams.append('page', encodeURIComponent(page))
    return this.http.get<Message[]>(url.toString())
  }

  newMessage(threadId:string, content:string): Observable<Message> {
    const url = new URL(`api/threads/${threadId}/messages`, location.origin)
    const body:FormMessage = {
      author: testUser,
      content: content,
      threadId: threadId
    }
    return this.http.post<Message>(url.toString(), body)
  }
}
