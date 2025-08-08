import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/shared/navbar/navbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('Guillermo');
  // protected readonly subtitle = signal('Tu puedes primin !');
}
