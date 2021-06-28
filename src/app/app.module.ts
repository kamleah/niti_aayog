import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgChartjsModule } from 'ng-chartjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgChartjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
