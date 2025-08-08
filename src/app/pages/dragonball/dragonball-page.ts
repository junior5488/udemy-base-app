import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
  race: string;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [
    NgClass
  ],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  name = signal('');
  power = signal(0);
  race = signal('');

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 10000, race: 'Sayayin'},
  ]);

  powerClasses(character: Character) {
    const isHighPower = character.power > 9000;
    const isNormalPower = character.power <= 9000;

    return {
      'text-danger': isHighPower,
      'text-success': isNormalPower,
    }
  }

  addCharacter() {
    if(!this.name() || !this.power() || !this.race() || this.power() <= 1000) {
      return;
    } else {
      const newChar:Character = {
        id: this.characters().length + 1,
        name: this.name(),
        power: this.power(),
        race: this.race()
      }
      // Recomendado (return implicito)
      this.characters.update( (list) => [ ...list, newChar] )
      this.resetFields();
    }
    console.log(`${this.name()} / ${this.power()}`);
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
    this.race.set('');
  }
}
