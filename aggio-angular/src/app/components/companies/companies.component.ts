import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companiesList = null

  constructor(private companiesService : CompaniesService, private router:Router) { }

  ngOnInit(): void {
    this.get_Companies_All();
  }
   
  get_Companies_All(){
    this.companiesService.getCompaniesAll().subscribe((data)=>{
    console.log(data)
    this.companiesList=data["empresas"]
     })
  }

  navigateToCategories(event,empresa_id)
  {
    this.router.navigate(['/categories'], { queryParams: { empresa_id: empresa_id} });
  }

}
