import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from '../pipe/media.pipe';

@Component({
  selector: 'app-componente12',
  standalone: true,
  imports: [CommonModule, MediaPipe],
  templateUrl: './componente12.component.html',
  styleUrl: './componente12.component.css'
})
export class Componente12Component {

  // Variavel tipo texto
  nome: string = 'Cristiano';

  // Objeto
  // a palavra-chave any significa que a variável pode conter qualquer tipo de dado. Isso implica que o TypeScript não fará nenhuma verificação de tipo sobre o conteúdo dessa variável.

  obj: any = { 'nome': 'Cristiano', 'idade': 46 };


  // Vetor de objetos
  alunos: any = [
    { 'nome': 'Amanda', 'nota1': 8, 'nota2': 9 },
    { 'nome': 'Davi', 'nota1': 7, 'nota2': 8 },
    { 'nome': 'Cristiano', 'nota1': 3, 'nota2': 2 },
    { 'nome': 'Noah', 'nota1': 7, 'nota2': 7 }
  ];

}
