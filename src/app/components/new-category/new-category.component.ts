import { Component, OnInit, Output,EventEmitter, Input, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';

enum Modes {
  Add,
  Edit,
  Delete
 }
@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})


export class NewCategoryComponent implements OnInit {
@Output()
newCategoryname=new EventEmitter<string>();
@Output()
isEditMode=new EventEmitter<boolean>();
@Input()
newCategory:string='';
@Input()
mode=0;
dynamicTitle='new category';
dynamicTitleOptions=['enter new','edit','delete'];
constructor(public router: Router,private categoryService:CategoriesService) {}

  ngOnInit(): void {
  
  }
  ngOnChanges(changes: any){
     if(this.mode!=0)
    this.newCategory=this.categoryService.getSelectedCategory();
    this.dynamicTitle=this.dynamicTitleOptions[this.mode];
  }
  onKey(event: any) { 
    this.newCategory = event.target.value;
  }
  saveCategory(){
  this.newCategoryname.emit(this.newCategory);
   this.isEditMode.emit(false);
   if(this.mode==Modes.Add)
     this.categoryService.addCategory(this.newCategory);
     else if(this.mode==Modes.Edit)
       this.categoryService.editCategory(this.newCategory);
else if(this.mode==Modes.Delete)
   this.categoryService.deleteCategory();
   this.newCategory='';
  }

}
 
