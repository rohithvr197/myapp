import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-firstcomp',
  templateUrl: './firstcomp.component.html',
  styleUrls: ['./firstcomp.component.css']
})
export class FirstcompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }
  title="Gadgeon";


    hello(){
      const service=new myservice();
      service.hello(this.title);
  }
  



}
