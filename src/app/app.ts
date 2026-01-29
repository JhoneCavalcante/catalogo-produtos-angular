import { Component, provideZonelessChangeDetection, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutoLista } from './components/produto-lista/produto-lista';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProdutoLista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('catalogo-produtos');
}
