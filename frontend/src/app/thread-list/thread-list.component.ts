import { Component, OnInit } from '@angular/core';
import * as R from 'ramda'

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.scss']
})
export class ThreadListComponent implements OnInit {

  private threads: any[]

  constructor() { }

  ngOnInit() {
    this.threads = R.repeat({_id: "abc-1234", title: "sample title", description: "sample description"}, 10)
  }
}
