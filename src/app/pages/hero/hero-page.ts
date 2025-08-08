import { CommonModule, UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core"; //Traduccion de idioma

@Component({
  templateUrl: './hero-page.html',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`
    return description;
  })

  // getHeroDescription(): string {
  //   return `${this.name()} - ${this.age()}`; //necesito valor de la señal con ()
  // }

  //<dd> {{ capitalizedName() }} </dd>
  // capitalizedName = computed(() => this.name().toUpperCase());

  //<dd> {{ capitalizedName() }} </dd>
  capitalizedName = computed(() => {
    const toUpper = this.name().toUpperCase();
    return toUpper
  });

  changeHero() {
    this.name.update((v) => 'Spiderman');
    this.age.update((v) => 22);
  }

  chageAge() {
    this.age.update((currernt) => currernt + 60);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

}
