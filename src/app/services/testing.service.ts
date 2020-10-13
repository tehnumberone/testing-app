import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private http: HttpClient) {
  }
  public postTest(testObject) {
    return this.http.post('http://localhost:8080/test', testObject);
  }
  public getTest() {
    return this.http.get('http://localhost:8080/test');
  }
  public putTest(testObject) {
    return this.http.put('http://localhost:8080/test', testObject);
  }
}

