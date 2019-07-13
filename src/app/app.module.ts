import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { PageSelectComponent } from './page-select/page-select.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoriesComponent,
    ProductImageComponent,
    PageSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
