import {Injectable} from '@angular/core';
import {Observable, Observer, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private ws: WebSocket;
  private observable: Observable<string>;
  private observer: Observer<any>;

  private connected = false;

  constructor() {
  }


  public async connect(url: string): Promise<Observable<string>> {

    if (this.connected) return;
    this.connected = true;

    const ws = new WebSocket(url);

    this.observer = {
      next: (data: string) => {
        if (ws.readyState === WebSocket.OPEN) ws.send(data);
      },
      error: (err: any) => {
      },
      complete: () => {
      }
    };

    return new Promise<Observable<string>>((res, rej) => {
      ws.onopen = () => {
        this.observable = Observable.create(
          (obs: Observer<string>) => {
            ws.onmessage = (e: MessageEvent) => obs.next(e.data);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
          });
        res(this.observable);
      };
      ws.onerror = (e) => rej(e);
    });

  }

  public async disconnect() {
    this.ws.close();
    this.observable = null;
    this.observer = null;
  }

  public send(data: string) {
    this.observer.next(data);
  }

}
