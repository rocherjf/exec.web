import {Injectable} from '@angular/core';
import {Observable, Observer, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {WebsocketService} from './websocket.service';
import {TestParam} from '../component/tests/bean/exec.api.bean';

@Injectable({
  providedIn: 'root'
})
export class TestRunnerService {

  constructor(
    private wsService: WebsocketService
  ) {
  }

  public async test(param: TestParam): Promise<Observable<any>> {

    const observable: Observable<string> =
      await this.wsService.connect('ws://localhost:3333/ws/runTest');

    this.wsService.send(JSON.stringify(param));

    return observable.pipe(map<string, TestParam>(m => JSON.parse(m)));

  }


}
