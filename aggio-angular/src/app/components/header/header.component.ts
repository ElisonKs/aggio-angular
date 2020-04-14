import { Component, OnInit } from '@angular/core';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  actualPostalCode;
  showLoader:boolean = false;
  addressResult="";

  constructor( private enderecoService:EnderecoService) { }

  ngOnInit(): void {
  }

  inputPostalCode(event)
  {
    this.actualPostalCode = event.target.value;
    if(this.actualPostalCode.length==9)
    {
      this.showLoader = true;
    this.enderecoService.getAdressesPostalCode(this.actualPostalCode).subscribe((data)=>{
     this.addressResult = data["glo_logradouro_end"] + ", " + data["glo_nome_bai"] + ", " + data["glo_nome_cid"];
      this.showLoader=false;
    })
  }
  }

}
