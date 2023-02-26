import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url= 'http://127.0.0.1:3000/todo/';

  constructor(private http: HttpClient) { }
  

  create(todo:any) {
    let response = this.http.post(this.url + 'create',todo);
    return response;
  }

  getAll() {
    let response = this.http.get(this.url + 'all');
    return response;
    
  }

  update(id:any) {
    let response = this.http.put(this.url + 'update/' + id, null);
    return response;

  }

  delete(id:any) {
    let response = this.http.delete(this.url + 'delete/' + id);
    return response;
    
  }
}
