import { NgModule } from '@angular/core';
import {CommonModule} from '../common/common.module';
import {ExecRouteSubmodule} from './exec-route-submodule.module';
import {TestComponent} from './component/test/test.component';
import {TestsComponent} from './page/tests/tests.component';
import { ExecComponent } from './component/exec/exec.component';

@NgModule({
  imports: [
    CommonModule,

    // Routing
    ExecRouteSubmodule,

    //
  ],
  declarations: [
    TestComponent,
    ExecComponent,
    TestsComponent
  ],

})
export class ExecModule { }
