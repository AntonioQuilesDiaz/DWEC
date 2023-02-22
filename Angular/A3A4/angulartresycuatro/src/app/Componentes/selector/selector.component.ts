import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})

export class SelectorComponent implements OnInit {
  public fuego: Array<any>;
  public agua: Array<any>;
  public hierba: Array<any>;

constructor(){
  this.fuego=[
    {
      name: "",
      url: ""
    }
  ]
  this.agua=[
    {
      name: "",
      url: ""
    }
  ]
  this.hierba=[
    {
      name: "",
      url: ""
    }
  ]
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

