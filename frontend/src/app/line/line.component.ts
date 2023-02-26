import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  @Input() todo: any;
  @Input() index: any;

  @Output() delete = new EventEmitter();

  @Output() done = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }


  deleteFromChild(id: any) {
    this.delete.emit(id);
  }

  update(id: any) {
    this.done.emit(id);
  }
}
