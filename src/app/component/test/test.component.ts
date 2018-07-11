import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TestsService} from '../../service/tests.service';
import {TestRunnerService} from '../../service/test.runner.service';
import {Observable, Subject} from 'rxjs';
import {TestCode, TestInfos, TestParam} from '../tests/bean/exec.api.bean';
import {TestUiBean, UiCode} from './bean/test.ui.bean';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private id: string;
  private test: TestUiBean;

  constructor(
    private ngRoute: ActivatedRoute,
    private testService: TestsService,
    private testRunnerService: TestRunnerService) {
  }

  public async ngOnInit() {
    // Recuperation de l'id du test
    this.id = this.ngRoute.snapshot.paramMap.get('id');
    // Requetage pour avoir les infos du test
    const wsTest = await this.testService.getTest(this.id);
    this.test = this.mapWsToUi(wsTest);
  }

  private mapWsToUi(ws: TestInfos): TestUiBean {
    const ui = new TestUiBean();
    ui.wsInfos = ws;
    ui.uiCodes = ui.wsInfos.codes.map(c => {
      return {
        wsCode: c,
        uiInput: c.template
      } as UiCode;
    });

    return ui;
  }

  private mapUiToWs(ui: TestUiBean): TestParam {
    const testParam = new TestParam();
    testParam.id = this.id;
    testParam.codes = this.test.uiCodes.map(c => {
      return {
        tag: c.wsCode.tag,
        code: c.uiInput
      } as TestCode;
    });

    return testParam;
  }


  public async onClickRunTest() {

    const obs: Observable<any> = await this.testRunnerService.test(this.mapUiToWs(this.test));

    obs.subscribe((v) => console.log(v));


  }
}
