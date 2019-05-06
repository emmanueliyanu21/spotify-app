import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null });
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() { 
    this.logs = [
      {id: '1', text: 'Generated Components', date: new Date('12/2/2018 12:20:23')},
      {id: '2', text: 'Border founder', date: new Date('12/2/2018 12:20:23')},
      {id: '3', text: 'Water Components', date: new Date('12/2/2018 12:20:23')},
      {id: '4', text: 'Kelly Components', date: new Date('12/2/2018 12:20:23')},
    ]
  }

  getLog(){
    if(localStorage.getItem('logs') === null) {
      this.logs = [];
    } else {
      this.logs = JSON.parse(localStorage.getItem('logs'));
    }

    return this.logs.sort((a, b) => {
      return b.date = a.date;
    });
  }

  setFormLog(log: Log ){
    this.logSource.next(log);
  }

  addLog(log: Log){
    this.logs.unshift(log);

    // add to localstorage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  updateLog(log: Log){
    this.logs.forEach((cur, index) => {
      if(log.id === cur.id){
        this.logs.splice(index, 1); 
      }
    });
    this.logs.unshift(log);

    // update to localstorage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  deleteLog(log: Log){
    this.logs.forEach((cur, index) => {
      if(log.id === cur.id){
        this.logs.splice(index, 1); 
      }
    });

    // delete to localstorage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  clearState(){
    this.stateSource.next(true);
  }
  
}
