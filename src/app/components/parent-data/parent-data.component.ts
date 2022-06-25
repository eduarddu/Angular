import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent implements OnInit {
  @Input() name:string = '';
  @Input() infoUser!:{data:string; cargo:string};
  @Input() infoEmpresa!:{empresa:string; bloco:string;}
  constructor() { }

  ngOnInit(): void {
  }

}
