import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TestsService} from '../../service/tests.service';
import {Test} from '../tests/bean/test';
import {TestRunnerService} from '../../service/test.runner.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private id: string;
  private test: Test;

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

  public onClickRunTest() {
    this.testRunnerService.connect();
  }
}
