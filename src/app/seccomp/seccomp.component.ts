import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-seccomp',
  templateUrl: './seccomp.component.html',
  styleUrls: ['./seccomp.component.css']
})
export class SeccompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
    

    title="Gadgeon";


    hello(){
      const service=new myservice();
      service.hello(this.title);
  }



}


