import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './message/message.component';
import { NewGroupStep1Component } from './new-group-step1/new-group-step1.component';
import { NewGroupStep2Component } from './new-group-step2/new-group-step2.component';
import { DialogComponent } from './dialog/dialog.component';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatCardModule, MatListModule, MatToolbarModule, MatExpansionModule, MatIconModule } from '@angular/material';

import "@angular/material/prebuilt-themes/indigo-pink.css";
const appRoutes: Routes = [
  { path: 'messages', component: MessagesComponent },
  { path: 'message/:id', component: MessageComponent },
  { path: 'newGroupStep1', component: NewGroupStep1Component },
  { path: 'newGroupStep2', component: NewGroupStep2Component },

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
    DialogComponent
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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
