import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ExecLog, ExecParam, FileToInject} from '../../api/exec.ws.api';
import {ExecService} from '../../service/exec.service';


@Component({
  selector: 'app-exec',
  templateUrl: './exec.component.html',
  styleUrls: ['./exec.component.css']
})
export class ExecComponent implements OnInit {


  // Id de l'image vers laquelle sera teste le code
  @Input() idImage: string;
  @Input() code: string;

  // todo template ?
  // todo default file
  public uiCodeToInject: FileToInject[];

  public logs: ExecLog[];

  constructor(
    private execService: ExecService) {
  }

  public async ngOnInit() {
    console.log('Affichage du composant ExecComponent', this.idImage);
    //

    // Todo Requetage pour avoir les infos pour cette image ?

    this.initUi();
  }

  private initUi(): void {
    this.uiCodeToInject = [{
      filePath: 'src/index.js',
      code: this.code
    }];

  }

  private mapUiToWs(): ExecParam {
    const execParam = new ExecParam();
    execParam.idImage = this.idImage;
    execParam.files = this.uiCodeToInject;

    return execParam;
  }


  public async onClickExec() {

    this.logs = [];

    const obs: Observable<ExecLog> = await this.execService.exec(this.mapUiToWs());

    obs.subscribe(
      (l) => this.logs.push(l),
      (e: Error) => {
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
