import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Shop} from "../models/Shop";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Shop[]> {
    return this.http.get<Shop[]>('http://localhost:4200/api/shops');
  }

}
