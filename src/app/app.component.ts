import { Component } from '@angular/core';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyLocations';
  isEnableCrudButtons:boolean=false;
  isEditMode:boolean=false;
  mode=0;
  newCategory:string='';
  constructor(private categoryService:CategoriesService){}

  
  isCategorySelectedHandler(val:boolean){
    debugger;
         this.isEnableCrudButtons = val;
    this.newCategory=this.categoryService.getSelectedCategory();
    }

    isEditModeHandler(val:boolean){
      debugger;
      this.isEditMode=val;
    }
    handleMode(val:any){
      this.mode=val;
    }

}
