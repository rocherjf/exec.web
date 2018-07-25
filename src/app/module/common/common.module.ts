import {NgModule} from '@angular/core';
import {CommonModule as ngCommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {CodeMirrorComponent} from './component/code-mirror.component';

@NgModule({
  imports: [],
  exports: [
    // Angular
    ngCommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    CodeMirrorComponent
  ],
  declarations: [
    CodeMirrorComponent
  ]
})
export class CommonModule {
}
