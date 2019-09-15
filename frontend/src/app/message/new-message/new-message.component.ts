import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Message } from '../../../../../interfaces';
import { FormBuilder } from '@angular/forms';
import { MessageService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { flatMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {
  @Output() newMessageEvent = new EventEmitter<Message>()
  private threadId: Observable<string>

  messageForm = this.fb.group({
    content: ['']
  })

  constructor(
    private readonly route: ActivatedRoute,
    private readonly messageService: MessageService,
    private readonly fb: FormBuilder) {
    this.threadId = this.route.paramMap
      .pipe(map(params => params.get('threadId')))
    }

  ngOnInit() {
  }
  onSubmit() {
    this.threadId.pipe(
      flatMap(id => this.messageService.newMessage(id, this.messageForm.value.content)))
      .subscribe(m => this.newMessageEvent.emit(m))
  }
}
