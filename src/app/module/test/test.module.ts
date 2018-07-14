import { NgModule } from '@angular/core';
import {CommonModule} from '../common/common.module';
import {TestRouteSubmodule} from './test.route.submodule';
import {TestComponent} from './component/test/test.component';
import {TestsComponent} from './component/tests/tests.component';
@NgModule({
  imports: [
    CommonModule,

    // Routing
    TestRouteSubmodule,

    //
  ],
  declarations: [
    TestComponent,
    TestsComponent
  ],

})
export class TestModule { }
