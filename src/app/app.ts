import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HelloWorldComponent } from './helloworld/helloworld.component'
import { Minhapagina } from './minhapagina/minhapagina';
import { Calculadora } from './calculadora/calculadora';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorldComponent, Minhapagina, Calculadora],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('conceitos-basicos');
}
