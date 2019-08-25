import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thread } from '../../../../interfaces'

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  constructor(private readonly http: HttpClient) { }

  getThread(id:string): Observable<Thread> {
    return this.http.get<Thread>(`/threads/${id}`)
  }
  getThreads(page:number=0): Observable<Thread[]> {
    const uri = new URL("/threads")
    uri.searchParams.append('page', encodeURIComponent(page))
    return this.http.get<Thread[]>(uri.toString())
  }
}
