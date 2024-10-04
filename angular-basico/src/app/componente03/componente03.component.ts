import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {
 // variavel de imagem

 imagem:string = 'assets/dia.jpg';

  // Função para troca de imagem
  alterarImagem(){
  if(this.imagem === 'assets/dia.jpg'){
    this.imagem = 'assets/noite.jpg';
  }else{
    this.imagem = 'assets/dia.jpg';
  }

}}
