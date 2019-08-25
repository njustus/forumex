import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThreadComponent } from './thread/thread.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadListComponent,
    ThreadComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/threads', pathMatch: 'full'},
      {path: 'threads/:threadId', component: ThreadComponent},
      { path: 'threads', component: ThreadListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
