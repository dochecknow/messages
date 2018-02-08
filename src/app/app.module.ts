import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './message/message.component';
import { NewGroupStep1Component } from './new-group-step1/new-group-step1.component';
import { NewGroupStep2Component, DialogOverviewExampleDialog } from './new-group-step2/new-group-step2.component';
import { GroupComponent } from './group/group.component'

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatCardModule, MatListModule, MatToolbarModule, MatExpansionModule, MatIconModule, MatGridListModule } from '@angular/material';
import { GroupService } from './services/group.service';
import { MessageService } from './services/messages.service';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';


const appRoutes: Routes = [
  { path: 'messages', component: MessagesComponent },
  { path: 'message/:id', component: MessageComponent },
  { path: 'newGroupStep1', component: NewGroupStep1Component },
  { path: 'newGroupStep2', component: NewGroupStep2Component },
  { path: 'group', component: GroupComponent },

  {
    path: '',
    redirectTo: '/messages',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    MessageComponent,
    NewGroupStep1Component,
    NewGroupStep2Component,
    DialogOverviewExampleDialog,
    GroupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    FormsModule,
    MatGridListModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  entryComponents: [NewGroupStep2Component, DialogOverviewExampleDialog],
  bootstrap: [AppComponent],
  providers: [GroupService, MessageService, UserService],
})
export class AppModule { }
