import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'

})
export class PersonajesComponent {

  //@Input('data') personajes: Personaje[] = [];

  get personajes( ):Personaje[]{

    return this.DbzService.personajes;
  }

  constructor(private DbzService:DbzService){
  }
 
}
