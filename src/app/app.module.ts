import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

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

import { FormsModule } from '@angular/forms';

// import { NgxEchartsModule } from 'ngx-echarts';
import { MenuComponent } from './menu/menu.component';
import { WindowComponent } from './window/window.component';
import { CompanyNewsComponent } from './company-news/company-news.component';
import { MessagesWindowComponent } from './window-messages/window-messages.component'
import { MessageComponent } from './message/message.component'
import { OffersSentComponent } from './offers-sent/offers-sent.component'
import { WindowBuyComponent } from './window-buy/window-buy.component'
import { CustomerComponent } from './customer/customer.component';
import { CustomersWindowComponent } from './window-customers/window-customers.component';
import { WindowSellComponent } from './window-sell/window-sell.component';
import { GroupsWindowComponent } from './window-groups/window-groups.component';
import { NewGroupStep1Component } from './new-group-step1/new-group-step1.component';
import { NewGroupStep2Component } from './new-group-step2/new-group-step2.component';
const appRoutes: Routes = [
  { path: 'window/messages', component: MessagesWindowComponent },
  { path: 'window/buy', component: WindowBuyComponent },
  { path: 'window/customers', component: CustomersWindowComponent },
  { path: 'window/sell', component: WindowSellComponent },
  { path: 'window/groups', component: GroupsWindowComponent },
  // { path: 'newGroupStep1', component: NewGroupStep1Component },
  // { path: 'newGroupStep1/:id', component: NewGroupStep1Component },
  // { path: 'newGroupStep2/:id', component: NewGroupStep2Component },
  // { path: 'group', component: GroupComponent },
  // { path: 'personalProfile/:id', component: PersonalProfileComponent },
  // { path: 'companyProfile/:id', component: CompanyProfileComponent },
  // {path: 'Op30buy', component: Op30buyComponent},
  // { path: 'Op55newOffer', component: Op55newOfferComponent},
  // { path: 'Op10sell', component: Op10sellComponent},
  // { path: 'op140tickets', component: Op140ticketsComponent},
  // { path: 'op143share', component: Op143shareComponent},
  // { path: 'Op90tender', component: Op90tenderComponent},
  // { path: 'upload', component: UploadComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    MenuComponent,
    CompanyNewsComponent,
    MessagesWindowComponent,
    MessageComponent,
    WindowBuyComponent,
    OffersSentComponent,
    CustomerComponent,
    CustomersWindowComponent,
    WindowSellComponent,
    GroupsWindowComponent,
    NewGroupStep1Component,
    NewGroupStep2Component,
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
    // NgxEchartsModule,
    MatMenuModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  entryComponents: [MenuComponent],
  bootstrap: [AppComponent],
  // providers: [GroupService, MessageService, UserService, PersonalProfileService, CompanyProfileService],
})
export class AppModule { }
