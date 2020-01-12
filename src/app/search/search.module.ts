import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SearchComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
