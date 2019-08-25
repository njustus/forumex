import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../../../../interfaces';

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
}
