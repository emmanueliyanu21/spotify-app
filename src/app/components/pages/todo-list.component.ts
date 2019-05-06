import { Component } from '@angular/core';

import { Log } from '../../models/Log';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodolistComponent {
  id: string;
  text: string;
  date: any;

  isNew: boolean = true;

  logs: Log[];
  selectedLog: Log;
  loaded: boolean = false;

  constructor(private aboutService: AboutService){

  }

  ngOnInit(){
    this.aboutService.stateClear.subscribe(clear =>{
      if(clear){
        this.selectedLog = {id: '', text: '', date: ''}
      };
    });

    this.logs = this.aboutService.getLog();

    this.aboutService.selectedLog.subscribe(log => {
      if(log.id !==null){
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }

  onSelect(log: Log){
    this.aboutService.setFormLog(log);
    this.selectedLog = log;
  }

  onSubmit(){
    // check new log
    if(this.isNew){
      // create a new log
      const newLog = {
         id: this.generateId(),
         text: this.text,
         date: new Date()
      }

      // Add new log
      this.aboutService.addLog(newLog);
    } else {
      // create log to be updated
      const updLog = {
        id: this.id,
        text: this.text,
        date: new Date()
      }

      // update Log
      this.aboutService.updateLog(updLog);
    }

    // clear state
    this.clearState();
  }

  clearState(){
    this.isNew = true;
    this.id = '';
    this.text = '';
    this.date = '';
    this.aboutService.clearState();
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  onDelete(log: Log){
    if(confirm ('Are you sure?')){
      this.aboutService.deleteLog(log);
    }
  }
}