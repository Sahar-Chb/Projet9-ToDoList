import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {



  todo = {
    text:''
  }

  @Output() reload = new EventEmitter();

  constructor(private data:DataService ) { }

  ngOnInit(): void {
  }


  save() {
    this.data.create(this.todo)
      .subscribe(
        {
          next: (_res) => {
            
            this.todo = {
              text:''
            }
            this.reload.emit();
           
          },
          error: (err) => {
            console.log(err);
          }
      }
    )

    
  }

  
}


