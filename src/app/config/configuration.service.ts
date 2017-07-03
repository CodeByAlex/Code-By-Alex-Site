import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ConfigurationService {
  result:any;
  constructor(private http: Http) {
  }

  getConfiguration(key) {
    return this.http.get('./assets/config.json').map(res => {
      return res.json()[key];
    });
  }
}