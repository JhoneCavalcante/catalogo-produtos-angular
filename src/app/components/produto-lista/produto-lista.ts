import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../../models/produto'
@Component({
  selector: 'app-produto-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-lista.html',
  styleUrl: './produto-lista.css',
})
export class ProdutoLista {
  produtos: Produto[] = [
    {id: 1, nome: "Notebook", preco: 3500, disponivel: true},
    {id: 2, nome: "Celular", preco: 1500, disponivel: false},
    {id: 3, nome: "Fone de ouvido", preco: 200, disponivel: true}
  ];
}
