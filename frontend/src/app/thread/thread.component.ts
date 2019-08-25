import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flatMap, map } from 'rxjs/operators';
import { ThreadService } from '../services/thread.service';
import { Observable } from 'rxjs';
import { Thread } from '../../../../interfaces';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {
  private thread: Observable<Thread>
  constructor(
    private readonly route: ActivatedRoute,
    private readonly threadService: ThreadService) {}

  ngOnInit() {
    this.thread = this.route.paramMap
      .pipe(map(params => params.get('threadId')))
      .pipe(flatMap(id => this.threadService.getThread(id)))
    }
}
