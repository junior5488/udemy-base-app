

import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './villain-page.html',
  imports: [
    UpperCasePipe
  ]
})

export class VillainPageComponent {

  name = signal('Megamente');
  age = signal(900);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`
    return description;
  });

  changeHero() {
    this.name.set('Munra');
    this.age.set(1000);
  }
  chageAge() {
    this.age.update((c) => c + 100)
  }
  resetForm() {
    this.name.set('Megamente');
    this.age.set(900);
  }
}
