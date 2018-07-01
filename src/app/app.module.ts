import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './component/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRouteSubmodule} from './app.route.submodule';
import { TestsComponent } from './component/tests/tests.component';
import { TestComponent } from './component/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    TestComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    // Routing
    AppRouteSubmodule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
