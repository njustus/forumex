import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flatMap, map } from 'rxjs/operators';
import { ThreadService, MessageService } from '../services/index';
import { Observable } from 'rxjs';
import { Thread, Message } from '../../../../interfaces';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {
  private thread: Observable<Thread>
  private messages: Observable<Message[]>
  private threadId: string
  constructor(
    private readonly route: ActivatedRoute,
    private readonly threadService: ThreadService,
    private readonly messageService: MessageService) {
    this.thread = this.route.paramMap
      .pipe(map(params => {this.threadId = params.get('threadId'); return this.threadId}))
      .pipe(flatMap(id => this.threadService.getThread(id)))
    this.messages = this.thread.pipe(flatMap(thread => this.messageService.forThread(thread._id.toString())))
  }

  ngOnInit() {
  }

  addMessage(m:Message) {
    console.log("new msg", m)
    this.messages = this.threadService.getThread(this.threadId).pipe(flatMap(thread => this.messageService.forThread(thread._id.toString())))
  }
}
