import { ChangeDetectionStrategy, Component, signal } from "@angular/core";


@Component({
  // ./ hace referencia al path donde nos encontramos
  templateUrl: './counter-page.html',
  styleUrl: './counter-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);
  // texto: string = ''

  constructor() {
    setInterval(() => {
      this.counterSignal.update((v) => v + 1)
      console.log(`Tick`);
    }, 2000);
  }

  increaseBy(value: number) {
    this.counter += value;
    // this.counterSignal.set( this.counterSignal() + value);
    // Para actualziacion de valores...
    this.counterSignal.update( (currernt) => currernt + value);
  }
  decreaseBy(value: number) {
    this.counter -= value;
  }
  resetCounter() {
    this.counter = 0;
    // Para seteo de valores...
    this.counterSignal.set(0);
  }

  // increaseBy(value: number): string {
  //   this.counter += value;
  //   this.texto = `El contador vale ${this.counter}`
  //   return this.texto;
  // }
}
