import {Component, OnInit} from '@angular/core';
import {TestsService} from '../../service/tests.service';
import {TestInfos} from './bean/exec.api.bean';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  private tests: TestInfos[];

  constructor(private testsService: TestsService) {
  }

  public async ngOnInit() {
    this.tests = await this.testsService.getTests();
    console.log(this.tests);
  }

}
