import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    SearchPageComponent,
    SearchCardComponent,
    PaginationComponent
  ],
  imports: [
    SharedModule,
    SearchPageRoutingModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class SearchPageModule { }
