import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters): [];
}

@Injectable({ providedIn: 'root' })
export class DragonballService {

  characters = signal<Character[]>(loadFromLocalStorage());

  // characters = signal<Character[]>([
  //   {id: 1, name: 'Goku', power: 10000, race: 'Sayayin'},
  //   {id: 2, name: 'Vegeta', power: 9000, race: 'Sayayin'},
  // ]);

  // Efecto destinado solo para grabar en el LocalStorage
  saveToLocalStorage = effect( () => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
    // console.log(`Cantidad de Personajes: ${this.characters().length}`);
  })

  addCharacter(newCharacter: Character) {
    this.characters.update( list => [ ... list, newCharacter]);
  }

}
