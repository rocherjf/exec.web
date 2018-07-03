import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestsComponent} from './component/tests/tests.component';
import {TestComponent} from './component/test/test.component';
import { RechercheCycleFormationComponent } from './component/recherche-cycle-formation/recherche-cycle-formation.component';
import {AccueilComponent} from './component/accueil/accueil.component';
import {ContenuCycleFormationComponent} from './component/contenu-cycle-formation/contenu-cycle-formation.component';
import {VignetteFormationComponent} from './component/vignette-formation/vignette-formation.component';
import {FormationComponent} from './component/formation/formation.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'recherche-cycle-formation', component: RechercheCycleFormationComponent },
  { path: 'contenu-cycle-formation/:id', component: ContenuCycleFormationComponent },
  { path: 'cycle-formation/:id', component: VignetteFormationComponent },
  { path: 'tests', component: TestsComponent },
  { path: 'test', component: TestComponent },
  { path: 'formation/:id', component: FormationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteSubmodule { }
