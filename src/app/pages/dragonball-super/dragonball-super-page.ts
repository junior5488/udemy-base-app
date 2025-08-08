import { DragonballService } from './../../services/dragonball.service';
import { NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";

@Component({
  selector: 'app-dragonball-super-page',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
],
  templateUrl: './dragonball-super-page.html',
})
export class DragonballSuperPage {
  // Inyeccion tradicional
  // constructor(public dragonballService: DragonballService) {  }

  // Nueva forma de DI (recomendado)
  public dragonballService = inject(DragonballService);

//   characters = signal<Character[]>([
//     {id: 1, name: 'Goku', power: 10000, race: 'Sayayin'},
//     {id: 2, name: 'Vegeta', power: 9000, race: 'Sayayin'},
//   ]);

//   addCharacter(newCharacter: Character) {
//     this.characters.update( list => [ ... list, newCharacter]);
//   }
}
