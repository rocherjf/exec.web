import {TestInfos} from '../../../api/test.http.api';
import {Code} from '../../../api/test.ws.api';


export class UiCode {
  wsCode: Code;
  uiInput: string;
}

export class TestUiBean {

  wsInfos: TestInfos;
  uiCodes: UiCode[];

}
