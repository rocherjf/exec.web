import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TestsService} from '../../service/tests.service';
import {Observable} from 'rxjs';
import {TestInfos} from '../../api/test.http.api';
import {TestUiBean, UiCode} from './bean/test.ui.bean';
import {TestCode, TestInfo, TestParam} from '../../api/test.ws.api';

class Log {
  isError?: boolean;
  isInfo?: boolean;
  isResultOk?: boolean;
  isResultFail?: boolean;
  message: string;
}


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() id: string;

  private test: TestUiBean;
  private logs: Log[];

  constructor(
    private ngRoute: ActivatedRoute,
    private testService: TestsService) {
  }

  public async ngOnInit() {

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

    this.logs = [];

    const obs: Observable<TestInfo> = await this.testService.runTest(this.mapUiToWs(this.test));

    obs.subscribe((l) => {
      this.logs.push({
        isError: l.log && l.log.isError,
        isInfo: l.log && l.log.isInfo,
        isResultOk: l.result && l.result.success,
        isResultFail: l.result && !l.result.success,
        message:
        (l.log && l.log.message) ||
        `Resultat ${l.result.success ? 'OK' : 'KO'} : ${JSON.stringify(l.result.in)} => ${JSON.stringify(l.result.out)}`
      })
      ;
    }, (e: Error) => {
      console.log(e);
      this.logs.push({
        isError: true,
        message: `Erreur : ${e.message}`
      });
    }, () => {
      this.logs.push({
        isInfo: true,
        message: `Fin`
      });
    });

  }
}
