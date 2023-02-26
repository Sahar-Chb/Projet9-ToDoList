import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: any;

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getAll()
      .subscribe(
        {
          next: (res) => {
            this.todos = res;
          },
          error: (err) => {
            console.log(err);
            
          }
       }
     )
  }


  deleteInParent(e: any) {
    this.data.delete(e)
      .subscribe(
        {
          next: (_res) => {
            this.ngOnInit();
        },
          error: (err) => {
            console.log(err);
          }
      }
    )
    
  }

  endUpdate(e: any) {
    this.data.update(e)
      .subscribe(
        {
          next: (res) => {
            this.ngOnInit();
            
        }, error: (err) => {
            console.log(err);
          }
      }
    )
    
  }
            
}
 
  