import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thread } from '../../../../interfaces'
import {FormThread} from '../models/index'
import { testUser } from './index';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  constructor(private readonly http: HttpClient) { }

  getThread(id:string): Observable<Thread> {
    return this.http.get<Thread>(`/api/threads/${id}`)
  }
  getThreads(page:number=0): Observable<Thread[]> {
    const uri = new URL("api/threads", location.origin)
    uri.searchParams.append('page', encodeURIComponent(page))
    console.log("calling: ", uri)
    return this.http.get<Thread[]>(uri.toString())
  }
  createThread(t:FormThread): Observable<Thread> {
    return this.http.post<Thread>("/api/threads", {...t, author: testUser})
  }
}
