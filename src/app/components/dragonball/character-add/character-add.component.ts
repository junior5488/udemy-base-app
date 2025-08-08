import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';


@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);
  race = signal('');

  newCharacter = output<Character>();

  addCharacter() {
    if(!this.name() || !this.power() || !this.race() || this.power() <= 1000) {
      return;
    } else {
      const newChar:Character = {
        id: Math.floor(Math.random() * 1000),
        name: this.name(),
        power: this.power(),
        race: this.race()
      }

      this.newCharacter.emit(newChar);
      this.resetFields();
    }
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
    this.race.set('');
  }
 }
