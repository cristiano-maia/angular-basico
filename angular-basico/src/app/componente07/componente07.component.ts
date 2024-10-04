import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente07',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente07.component.html',
  styleUrl: './componente07.component.css'
})
export class Componente07Component {

  // variavel logica

  condicao:boolean = true;

  // lista de aprovados e reprovados

  lista:string[] = ['Aprovado','Aprovado','Reprovado'];

}
