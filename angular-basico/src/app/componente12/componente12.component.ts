import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente12',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente12.component.html',
  styleUrl: './componente12.component.css'
})
export class Componente12Component {

  // Variavel tipo texto
  nome:string = 'Cristiano';
  
  // Objeto
  // a palavra-chave any significa que a variável pode conter qualquer tipo de dado. Isso implica que o TypeScript não fará nenhuma verificação de tipo sobre o conteúdo dessa variável.
  
  obj:any = {'nome':'Cristiano', 'idade':46};

}
