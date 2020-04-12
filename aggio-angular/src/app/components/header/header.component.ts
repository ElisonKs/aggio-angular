import { Component, OnInit } from '@angular/core';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  actualPostalCode;

  constructor( private enderecoService:EnderecoService) { }

  ngOnInit(): void {
  }

  inputPostalCode(event)
  {
    this.actualPostalCode = event.target.value;
    this.enderecoService.getEnderecosCep(this.actualPostalCode).subscribe((data)=>{
      console.log(data);
    })
  }

}
