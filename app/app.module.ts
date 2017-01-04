import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router';


import {AppComponent}  from './app.component';
import {AppRoutingModule} from './app-routing.module'
import {CaseListComponent} from './case/case-list.component'
import {CaseService} from './service/case.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

  ],
  declarations: [
    AppComponent,
    CaseListComponent,
  ],
  providers: [
    CaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
