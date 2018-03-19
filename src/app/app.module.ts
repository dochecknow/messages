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
import { PersonalProfileService } from './services/personal-profile.service';
import { CompanyProfileService } from './services/company-profile.service';
import { Op10sellComponent } from './op10sell/op10sell.component';
import { Op20meComponent } from './op20me/op20me.component';
import { Op22profileComponent } from './op22profile/op22profile.component';
import { Op28productsComponent } from './op28products/op28products.component';
import { Op30buyComponent } from './op30buy/op30buy.component';
import { Op50shopComponent } from './op50shop/op50shop.component';
import { Op55newOfferComponent } from './op55new-offer/op55new-offer.component';
import { Op57newShopitemComponent } from './op57new-shopitem/op57new-shopitem.component';
import { Op90tenderComponent } from './op90tender/op90tender.component';
import { Op80bidsComponent } from './op80bids/op80bids.component';
import { Op85bidsComponent } from './op85bids/op85bids.component';
import { Op85bidComponent } from './op85bid/op85bid.component';
import { Op140ticketsComponent } from './op140tickets/op140tickets.component';
import { Op143shareComponent } from './op143share/op143share.component';
import { CommonComponent } from './common/common.component';
import { UploadComponent } from './upload/upload.component';
import { NgxEchartsModule } from 'ngx-echarts';

const appRoutes: Routes = [
  { path: 'messages', component: MessagesComponent },
  { path: 'message/:id', component: MessageComponent },
  { path: 'newGroupStep1', component: NewGroupStep1Component },
  { path: 'newGroupStep1/:id', component: NewGroupStep1Component },
  { path: 'newGroupStep2/:id', component: NewGroupStep2Component },
  { path: 'group', component: GroupComponent },
  { path: 'personalProfile/:id', component: PersonalProfileComponent },
  { path: 'companyProfile/:id', component: CompanyProfileComponent },
  {path: 'Op30buy', component: Op30buyComponent},
  { path: 'Op55newOffer', component: Op55newOfferComponent},
  { path: 'Op10sell', component: Op10sellComponent},
  { path: 'op140tickets', component: Op140ticketsComponent},
  { path: 'op143share', component: Op143shareComponent},
  { path: 'Op90tender', component: Op90tenderComponent},
  { path: 'upload', component: UploadComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    MessageComponent,
    NewGroupStep1Component,
    NewGroupStep2Component,
    PersonalProfileComponent,
    CompanyProfileComponent,
    DialogOverviewExampleDialog,
    GroupComponent,
    Op10sellComponent,
    Op20meComponent,
    Op22profileComponent,
    Op28productsComponent,
    Op30buyComponent,
    Op50shopComponent,
    Op55newOfferComponent,
    Op57newShopitemComponent,
    Op90tenderComponent,
    Op80bidsComponent,
    Op85bidsComponent,
    Op85bidComponent,
    Op140ticketsComponent,
    Op143shareComponent,
    CommonComponent,
    UploadComponent
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
    MatDatepickerModule,
    FormsModule,
    MatGridListModule,
    NgxEchartsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  entryComponents: [NewGroupStep2Component, DialogOverviewExampleDialog],
  bootstrap: [AppComponent],
  providers: [GroupService, MessageService, UserService, PersonalProfileService, CompanyProfileService],
})
export class AppModule { }
