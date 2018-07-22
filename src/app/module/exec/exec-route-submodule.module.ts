import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestsComponent} from './page/tests/tests.component';

const routes: Routes = [
  { path: 'tests', component: TestsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecRouteSubmodule { }
