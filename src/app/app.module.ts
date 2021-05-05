import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
//import { MatSelectionList } from '@angular/material/list';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent,
    ToolbarComponent,
    NewCategoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   MatListModule,
   BrowserAnimationsModule, 
   MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
