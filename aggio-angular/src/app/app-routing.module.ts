import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './components/companies/companies.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';


const routes: Routes = [
  { 
    path: '',
    component: HomeComponent
  },
  { 
    path: 'companies',
    component: CompaniesComponent
  },
  {
    path: 'categories',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
