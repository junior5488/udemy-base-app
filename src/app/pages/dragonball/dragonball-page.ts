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
    // {id: 2, name: 'Vegeta', power: 9000, race: 'Sayayin'},
    // {id: 3, name: 'Roshi', power: 3000, race: 'Human'},
    // {id: 3, name: 'Yamcha', power: 500, race: 'Human'},
    // {id: 3, name: 'Piccoro', power: 2500, race: 'Half-breed'},
  ]);

  // powerClasses = computed(() => {
  //   return {
  //     'text-dange': true,
  //   }
  // });

  powerClasses(character: Character) {
    const isHighPower = character.power > 9000;
    const isNormalPower = character.power <= 9000;

    return {
      'text-danger': isHighPower,
      'text-success': isNormalPower,
    }
  }

  // Si coloco Number en el HTML, da un error puede pasar que el compilador no reconozca
  // Number como función global (por configuración de isolatedModules, useDefineForClassFields
  // o un bug con verbatimModuleSyntax). Solucion: Hacer la conversión en TypeScript (recomendado)
  // onPowerChange(power: string) {
  //   this.power.set(Number(power));
  // }

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
      // No Recomendado
      // this.characters().push(newChar);
      // Recomendado (return implicito)
      this.characters.update( (list) => [ ...list, newChar] )
      // Recomendado (return explicito)
      // this.characters.update(
      //   (list) => {
      //     return [ ...list, newChar]
      //   }
      // )
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
