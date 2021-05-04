import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
 
 @Output()
  isCategorySelected = new EventEmitter<boolean>();
  categories:Category[];
  constructor(public router: Router,public activatedRoute: ActivatedRoute, private categoriesService:CategoriesService) {
    this.categories=categoriesService.getAllCategories();
  }
 
 
    ngOnInit():void {
    
        this.categoriesService.CategoryChangeEvent.subscribe(
          ()=>  this.categories=this.categoriesService.getAllCategories());
        
      } 
  

  changeSelection(val:any){
    this.isCategorySelected.emit(val.option._selected);
    this.categoriesService.setSelectedCategory(val.option.value.name);
  }

}
