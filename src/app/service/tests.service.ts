import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Test} from '../component/tests/bean/test';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  private testsUrl = 'rest/tests';
  private testUrl = 'rest/tests/';

  constructor(
    private http: HttpClient) {
  }

  public async getTests(): Promise<Test[]> {
    return this.http.get<Test[]>(this.testsUrl).toPromise();
  }

  public async getTest(id: string): Promise<Test> {
    return this.http.get<Test>(`${this.testUrl}/${id}`).toPromise();
  }


}
