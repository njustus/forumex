import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ThreadService } from '../../services';
import { FormThread } from '../../models/index';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.scss']
})
export class NewThreadComponent implements OnInit {

  threadForm = this.fb.group({
    title: [''],
    description: ['']
  })

  constructor(
    private readonly fb:FormBuilder,
    private readonly threadService:ThreadService) { }

  ngOnInit() {
  }

  onSubmit() {
    const thread:FormThread = this.threadForm.value
    this.threadService
      .createThread(thread)
      .toPromise()
      .then(t => {
        console.log("thread created: ", t)
      })
  }
}
