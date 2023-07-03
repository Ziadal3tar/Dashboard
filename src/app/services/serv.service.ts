import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServService {


  constructor(private HttpClient:HttpClient) { }

  product(): any {
    return this.HttpClient.get(`https://dummyjson.com/products`);
  }
}
