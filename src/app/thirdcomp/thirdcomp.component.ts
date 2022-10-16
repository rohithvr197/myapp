import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-thirdcomp',
  templateUrl: './thirdcomp.component.html',
  styleUrls: ['./thirdcomp.component.css']
})
export class ThirdcompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Gadgeon"
  hello(){
    const service=new myservice();
    service.hello(this.title);
}

}
