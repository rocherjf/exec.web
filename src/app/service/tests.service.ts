import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TestInfos} from '../component/tests/bean/exec.api.bean';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  private testsUrl = 'rest/tests';
  private testUrl = 'rest/tests/';

  constructor(
    private http: HttpClient) {
  }

  public async getTests(): Promise<TestInfos[]> {
    return this.http.get<TestInfos[]>(this.testsUrl).toPromise();
  }

  public async getTest(id: string): Promise<TestInfos> {
    return this.http.get<TestInfos>(`${this.testUrl}/${id}`).toPromise();
  }


}
