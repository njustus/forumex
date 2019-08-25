import { Component, OnInit } from '@angular/core';
import * as R from 'ramda'
import { ThreadService } from '../services/thread.service';
import { Observable } from 'rxjs';
import { Thread } from '../../../../interfaces'

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.scss']
})
export class ThreadListComponent implements OnInit {

  private threads: Observable<Thread[]>

  constructor(private readonly threadService: ThreadService) { }

  ngOnInit() {
    this.threads = this.threadService.getThreads()
  }
}
