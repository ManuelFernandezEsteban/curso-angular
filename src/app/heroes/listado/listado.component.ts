import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent { 

  heroes:string[] = ['Hulk','Thor','Spiderman','Dr Strange','Capitán América'];
  heroeBorrado:string='';
  isBorrado:boolean=false;

  borrarHeroe():void {
    this.heroeBorrado = this.heroes.shift()||'';
    if (this.heroeBorrado!=='') {
      this.isBorrado=true;
    }
    else {
      this.isBorrado=false;
    }
  }


}
