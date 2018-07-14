
import {NgModule} from '@angular/core';

import {AppComponent} from './page/app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRouteSubmodule} from './app.route.submodule';

import {VignetteFormationComponent} from './component/vignette-formation/vignette-formation.component';
import {ExerciceComponent} from './component/exercice/exercice.component';
import {ContenuCycleFormationComponent} from './component/contenu-cycle-formation/contenu-cycle-formation.component';
import {RechercheCycleFormationComponent} from './component/recherche-cycle-formation/recherche-cycle-formation.component';
import {AccueilComponent} from './component/accueil/accueil.component';
import {CycleFormationComponent} from './component/cycle-formation/cycle-formation.component';
import {FormationComponent} from './component/formation/formation.component';
import {MarkdownComponent} from './component/markdown/markdown.component';
import {CommonModule} from './module/common/common.module';
import {TestModule} from './module/test/test.module';

@NgModule({
  declarations: [
    AppComponent,
    VignetteFormationComponent,
    ExerciceComponent,
    ContenuCycleFormationComponent,
    RechercheCycleFormationComponent,
    AccueilComponent,
    CycleFormationComponent,
    FormationComponent,
    MarkdownComponent
  ],
  imports: [
    BrowserAnimationsModule,
    // Routing principal
    AppRouteSubmodule,
    // Module en commun
    CommonModule,
    // Module pour les tests
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
