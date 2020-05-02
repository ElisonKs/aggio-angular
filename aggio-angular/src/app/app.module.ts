import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Globals} from './globals'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { MinHeaderComponent } from './components/min-header/min-header.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductsComponent } from './components/products/products.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CompaniesComponent,
    MinHeaderComponent,
    CategoryComponent,
    ProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskModule.forRoot(options),
    NgbModule
   
  ],
  providers: [Globals],
  bootstrap: [AppComponent,CompaniesComponent]
})
export class AppModule { }
