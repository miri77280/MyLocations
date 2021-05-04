import { Injectable,EventEmitter } from '@angular/core';

import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  CategoryChangeEvent=new EventEmitter<any>();
  selectedCategory:string='';
getAllCategories(){
  let categories = JSON.parse(localStorage.getItem("categories")||'');
  return categories;
}

addCategory(categoryName:string){
  let categories = JSON.parse(localStorage.getItem("categories")||'');
  categories.push({name:categoryName});
  localStorage.setItem("categories",JSON.stringify(categories));
  this.CategoryChangeEvent.emit();
}
editCategory(categoryName:string){
  let categories = JSON.parse(localStorage.getItem("categories")||''); 
 let editedCategory= categories.find((x: Category)=>x.name==this.selectedCategory);
 editedCategory?editedCategory.name=categoryName:'';
 this.setSelectedCategory(categoryName);
 localStorage.setItem("categories",JSON.stringify(categories));
 this.CategoryChangeEvent.emit();
}

deleteCategory(){
  let categories = JSON.parse(localStorage.getItem("categories")||'');
  let categoryToDelete= categories.find((x:Category)=>x.name==this.selectedCategory);
  if(categoryToDelete){
    var index= categories.indexOf(categoryToDelete);
    categories.splice(index,1);
  }
  localStorage.setItem("categories",JSON.stringify(categories));
  this.CategoryChangeEvent.emit();
}
getSelectedCategory(){
  return this.selectedCategory;
}

setSelectedCategory(categoryName:string){
  this.selectedCategory=categoryName;
}
  constructor() { 
    localStorage.setItem("categories",JSON.stringify([{name:'categoryA'},{name: 'categoryB'},{name: 'categoryC'},{name: 'categoryD'},{name: 'categoryE'}]));
  }
}
