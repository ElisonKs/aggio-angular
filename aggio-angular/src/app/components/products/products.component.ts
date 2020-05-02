import { Component, OnInit,Input } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() category_id=null;
  productsList = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
   
      this.get_Products();
    
  }

  get_Products(){
    this.productsService.getProducts(this.category_id).subscribe((data)=>{
    console.log(data)
    this.productsList=data["produtos"]
     })
  }

}
