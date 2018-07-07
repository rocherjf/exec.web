import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TestsService} from '../../service/tests.service';
import {TestRunnerService} from '../../service/test.runner.service';
import {Observable, Subject} from 'rxjs';
import {TestInfos} from '../tests/bean/export.bean';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private id: string;
  private test: TestInfos;

  constructor(
    private ngRoute: ActivatedRoute,
    private testService: TestsService,
    private testRunnerService: TestRunnerService) {
  }

  public async ngOnInit() {
    this.id = this.ngRoute.snapshot.paramMap.get('id');
    this.test = await this.testService.getTest(this.id);
    console.log(this.test);
  }

  public async onClickRunTest() {
    const obs: Observable<any> = await this.testRunnerService.test({
      id: this.id,
      codes: [
        {
          tag: 'tag',
          code: 'fffds'
        }

      ]
    });

    obs.subscribe((v) => console.log(v));


  }
}
