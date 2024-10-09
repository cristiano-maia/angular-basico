import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componente13.component.html',
  styleUrl: './componente13.component.css'
})
export class Componente13Component {

  // vetor para armazenar os produtos vindo da api
  vetor: Produto[] = [];

  // Visibilidade dos botões
  btnCadastrar: boolean = true;

  // Objeto de formulario
  formulario = new FormGroup({
    id:     new FormControl(null), // devido o id ser um valor numerico vamos definir como nulo
    nome:   new FormControl(''), // como o nome do produto é texto usaremos ''
    valor:  new FormControl(null) // devido ser valor numerico vamos definir como nulo
  });

  // Construtor pra ter acesso a todas as funcoes do serviço
  constructor(private servico: ProdutoService) { }

  // Inicialização do componente
  ngOnInit() {
    this.selecionar();
  }

  // metodo para selecionar todos os produtos
  selecionar() {

    // o retorno da api esta sendo adicionada ao vetor
    this.servico.selecionar().subscribe(retorno => { this.vetor = retorno });

  }

  // metodo para cadastrar produtos
  cadastrar(){
    this.servico.cadastrar(this.formulario.value as Produto) // informamos que pode ser tratado como modelo de produto

    .subscribe(retorno => {

      this.vetor.push(retorno);

      this.formulario.reset();

    });
  }

  // metodo para selecionar um produto especifico
  selecionarProduto(indice:number){

    this.formulario.setValue({
      id: this.vetor[indice].id,
      nome: this.vetor[indice].nome,
      valor: this.vetor[indice].valor
    });

    this.btnCadastrar = false;

  }

  // metodo para alterar produtos
  alterar(){
    this.servico.alterar(this.formulario.value as Produto)
    .subscribe(retorno => {

      // Obter o indice do objeto alterado
      let indiceAlterado = this.vetor.findIndex(obj => {
          return this.formulario.value.id === obj.id;
      }); // basicamente cada linha do vetor


      // alterar o vetor
      this.vetor[indiceAlterado] = retorno;

      //limpar o formulario
      this.formulario.reset();

      // visibilidade dos botoes
      this.btnCadastrar = true;

    })
  }

  // metodo para remover produtos

  remover(){
    this.servico.remover(this.formulario.value.id)
    .subscribe(() => {

      // obter o indice do vetor que sera removido
      let indiceRemovido = this.vetor.findIndex(obj => {

        return obj.id === this.formulario.value.id;
        
      })

      // remover objeto do vetor
      this.vetor.splice(indiceRemovido, 1);

      // limpar formulario
      this.formulario.reset();

      // visibilidade dos botoes
      this.btnCadastrar = true;

    });
  }

}
