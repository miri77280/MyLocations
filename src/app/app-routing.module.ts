import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';

const routes: Routes = [
  { path: 'newCategory', component: NewCategoryComponent },
  {path:'categories',component:CategoriesListComponent},
  {path:'',component:CategoriesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
