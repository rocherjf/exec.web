import {Injectable} from '@angular/core';
import {Observable, Observer, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {WebsocketService} from './websocket.service';
import {TestParam} from '../component/tests/bean/exec.api.bean';

@Injectable({
  providedIn: 'root'
})
export class TestRunnerService {

  constructor(private wsService: WebsocketService) {
  }

  public async test(param: TestParam): Promise<Observable<any>> {
    let observable: Observable<string>;
    try {
      observable =
        await this.wsService.connect('ws://localhost:8333/ws/runTest');
    } catch (e) {
      console.log(e);
    }

    this.wsService.send(JSON.stringify(param));

    return observable.pipe(map<string, TestParam>(m => JSON.parse(m)));

  }


}
