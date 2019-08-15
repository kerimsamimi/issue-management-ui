import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {ApiService} from '../api.service';

@Injectable()
export class UserService {

  private USER_PATH = '/dashboard';
  private LOGIN_PATH = '/login';

  constructor(private apiService: ApiService) {
  }

  getAllPageable(page): Observable<any> {
    return this.apiService.get(this.USER_PATH + '/pagination', page).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          return {};
        }
      }
    ));
  }

  getAll(): Observable<any> {
    return this.apiService.get(this.USER_PATH).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          console.log(res);
          return {};
        }
      }
    ));
  }

  getByUsername(username): Observable<any> {
    return this.apiService.get(this.LOGIN_PATH, username).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          console.log(res);
          return {};
        }
      }
    ));
  }

  getById(id): Observable<any> {
    return this.apiService.get(this.USER_PATH, id).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          console.log(res);
          return {};
        }
      }
    ));
  }

  createUser(user): Observable<any> {
    return this.apiService.post(this.USER_PATH, user).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          console.log(res);
          return {};
        }
      }
    ));
  }

  delete(id): Observable<any> {
    return this.apiService.delete(this.USER_PATH + '/' + id).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          console.log(res);
          return {};
        }
      }
    ));
  }

  login(user): Observable<any> {
    return this.apiService.post( '/login', user).pipe(map(res => {
      if (res) {
        return res;
      } else {
        console.log(res);
        return {};
      }
    }));
  }
}
