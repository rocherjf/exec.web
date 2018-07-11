import {Code, TestInfo, TestInfos} from '../../tests/bean/exec.api.bean';

export class UiCode {
  wsCode: Code;
  uiInput: string;
}

export class TestUiBean {

  wsInfos: TestInfos;
  uiCodes: UiCode[];

}
