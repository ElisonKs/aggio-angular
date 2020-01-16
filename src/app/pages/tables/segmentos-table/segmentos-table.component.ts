import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import {SegmentoService} from '../../../services/segmento.service'

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './segmentos-table.component.html',
  styleUrls: ['./segmentos-table.component.scss'], 
})
export class SegmentosComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      dlv_id_seg: {
        title: 'ID',
        type: 'number',
      },
      dlv_descricao_seg: {
        title: 'Descrição',
        type: 'string',
      }
     
      
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private segmentoservice: SegmentoService) {
    const data = this.service.getData();
    this.segmentoservice.getSegmentos().subscribe(data=>{
      this.source.load(data["data"]);
    });
    
   
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
