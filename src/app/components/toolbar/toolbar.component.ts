import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
@Input()
isEnableCrudButtons:boolean=false;
@Output()
isEditMode=new EventEmitter<boolean>();
@Output()
mode=new EventEmitter<string>();
  constructor(public router: Router) { }
  navigateToNewCategory() {
   }
  onClickEvent(mode:string){
   this.mode.emit(mode);
   this.isEditMode.emit(true);
    this.navigateToNewCategory();
  }
 
  ngOnInit(): void {
  }

}
