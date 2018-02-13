import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './message/message.component';
import { NewGroupStep1Component } from './new-group-step1/new-group-step1.component';
import { NewGroupStep2Component, DialogOverviewExampleDialog } from './new-group-step2/new-group-step2.component';
import { GroupComponent } from './group/group.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatOption,
  MatTab,
} from '@angular/material';
import { GroupService } from './services/group.service';
import { MessageService } from './services/messages.service';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { CompanyProfileComponent } from './company-profile/company-profile.component';


const appRoutes: Routes = [
  { path: 'messages', component: MessagesComponent },
  { path: 'message/:id', component: MessageComponent },
  { path: 'newGroupStep1', component: NewGroupStep1Component },
  { path: 'newGroupStep1/:id', component: NewGroupStep1Component },
  { path: 'newGroupStep2/:id', component: NewGroupStep2Component },
  { path: 'group', component: GroupComponent },
  { path: 'personalProfile/:id', component: PersonalProfileComponent },
  { path: 'companyProfile/:id', component: CompanyProfileComponent },
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
    PersonalProfileComponent,
    CompanyProfileComponent
    DialogOverviewExampleDialog,
    GroupComponent,
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatRadioModule,
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
