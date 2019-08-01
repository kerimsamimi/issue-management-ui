
import {ApiService} from '../api.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class IssueHistoryService {

  private ISSUE_HISTORY_PATH = '/issue/history';

  constructor(private apiService: ApiService ) {
  }

  getAll(): Observable<any> {
    return this.apiService.get(this.ISSUE_HISTORY_PATH).pipe(map(
      res => {
        if (res) {
          return res;
        }else {
          console.log(res);
          return {};
        }
      }
    ));
  }
  getById(id): Observable<any> {
    return this.apiService.get(this.ISSUE_HISTORY_PATH, id).pipe(map(
      res => {
        if (res) {
          return res;
        }else {
          console.log(res);
          return {};
        }
      }
    ));
  }

  createIssueHistory(project): Observable<any>{
    return this.apiService.post(this.ISSUE_HISTORY_PATH, project).pipe(map(
      res => {
        if (res) {
          return res;
        }else {
          console.log(res);
          return {};
        }
      }
    ));
  }

  delete(id): Observable<any> {
    return this.apiService.delete(this.ISSUE_HISTORY_PATH, id).pipe(map(
      res => {
        if (res) {
          return res;
        }else {
          console.log(res);
          return {};
        }
      }
    ));
  }

}
