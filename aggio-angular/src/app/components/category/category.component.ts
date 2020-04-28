import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  empresa_id=null;
  categoriesList = [];

  constructor(private categoriesService: CategoriasService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params)
      this.empresa_id = params['empresa_id'];
      this.get_Categories();
    });
  }

  get_Categories(){
    this.categoriesService.getCategories(this.empresa_id).subscribe((data)=>{
    console.log(data)
    this.categoriesList=data["categorias"]
     })
  }

}
