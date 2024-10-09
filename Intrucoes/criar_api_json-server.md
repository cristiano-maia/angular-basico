Criar API através do json-server

1. Crie uma pasta em qualquer local do computador, coloque o nome api
2. Em uma janela separada do vscode abra a pasta api
3. Abra um terminal no vscode da pasta api, acesse link abaixo:
[npmjs.com/package/json-server/v/0.17.4](https://www.npmjs.com/package/json-server/v/0.17.4)


4. Copie o link de instalação, `npm i json-server@0.17.4` cole no terminal da pasta api.
`Obs. pode ser que não apareça nenhum arquivo, devido configuração do vscode, mas deu tudo certo`

5. Na pasta api, crie um arquivo chamado produtos.json
crie o conteudo abaixo:

```
{
  "produtos": [
    {
      "nome": "Galaxy S24",
      "valor": 5000,
      "id": 1
    },
    {
      "nome": "iPhone 15",
      "valor": 7000,
      "id": 2
    }
  ]
}
```

6. Execute a api, no terminal da pasta api:
`npx json-server produtos.json`

7. Confirme se api foi gerada retornando um endereço:
` http://localhost:3000/produtos ` 


#### Criando um componente para interagir com o dados da api

1. Precisa estar ativo a api no localhost

2. Crie o componente13:
`ng g c componente13`

3. Abra o arquivo app.component.html e faça o apontamento para:
`<app-componente13></app-componente13>`
Não esqueça de fazer o importe para app.component.ts

4. Criando o modelo de produto
Abra a pasta modelo crie um arquivo com o nome: `Produto.ts`
Crie a estrutura de acordo com a api:

```
export class Produto{

    nome:string;
    valor:number;
    id:number;
    
}
```

* Criando o front-end

1. Abra o arquivo componente13.component.html e monte a estrutura abaixo:

```
<form>
    <input type="number" class="form-control" readonly>
    <input type="text" class="form-control" placeholder="Nome">
    <input type="number" class="form-control" placeholder="Valor">

    <input type="button" class="btn btn-primary" value="Cadastrar">
    <input type="button" class="btn btn-primary" value="Alterar">
    <input type="button" class="btn btn-primary" value="Remover">
</form>

<table class="table table-striped">
    <thead>
    <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Valor</th>
        <th>Selecionar</th>
    </tr>
    </thead>

    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>

</table>

```

2. Abra o arquivo componente13.component.css e monte a estrutura abaixo:
```
form{
    width: 50%;
    margin: 30px auto;
    text-align: center;
}

input{
    margin-bottom: 10px;
}

input[type="button"]{
    margin-left: 5px;
    margin-right: 5px;
}
```

* Implementar o provide HttpClient

1. Abra o arquivo app.config.ts
Adicione  o providerHttpClient(withFech()) conforme abaixo:
```
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch())]

  // O código provideHttpClient(withFetch()) permite que sua aplicação peça ou envie informações 
  // para um servidor, como quando você busca dados de uma API. 
  // Ele usa uma forma moderna de fazer isso, chamada fetch.

};

```

#### O que e o RxJS
o RxJS é uma biblioteca para trabalhar com programação reativa, utilizando tecnologias JavaScript ou TypeScript

No Angular o RxJS já esta configurado, em outros framewoks ou bibliotecas como: React e Vue.js é necessario efetuar a instalação.

#### Programação Reativa?
* Conceito: É um paradigma de programação que se concentra em como os sistemas reagem a eventos e mudanças de estado.

Exemplo: Uma mensagem é exibida para o cliente ao acessar uma página, exemplo: Carregando dados, aguarde...

Enquanto a mensagem é exibida, há ume requisição para obter uma lista de dados. Quando a lista for obtida, a mensagem será removida e exibira uma tabela contendo os dados através da nossa requisição.

O RxJS trabalha com o padrão de reatividade, onde podemos modificar estruturas dependendo do evendo executado.

Outras vantagens:
- Sua estrutura é assincrona 
- Facilita criar uma função e reutilizar em outros compontentes.
- Dispõe de diversas funcionalidade para executar funções:
    - Observable;
    - Subscribr;
    - Pipe;
    - Of...

Conceito Básico
Para compreender a utilização básica, iremos usar os seguinte comandos:
* Observable: Função responsabel por executar alguma ação em determinados periodos.
* Subscribe: Quando um Observable encontra algo, o Subscribe será notificado, podendo realizar alguma ação.

Vamos usar um exemplo bem curto e simples:

```
Observable: A campainha
Imagine que você está esperando alguém tocar a campainha.


Observable: A campainha é o Observable. Ela vai tocar em algum momento.
Subscribe: Você fica ouvindo a campainha (subscribe) para saber quando alguém chega.
Evento: Quando alguém toca a campainha, você recebe o aviso.
Resumindo:

O Observable é a campainha (vai tocar em algum momento).
O subscribe é você esperando o som da campainha.
O evento é o toque da campainha (quando a pessoa chega).
```

Site oficial: https://rxjs.dev/

#### Criando camada de serviços

1. Pare o servidor se estiver em execução
2. No terminal:
`ng g s servico/produto`
Será criada uma pasta serviço, e dentro dela haverá um arquivo .ts e .spec.ts


#### Estrutura de serviços
arquivo `produto.service.ts`

```
// Importar o Injectable para prover a injeção de dependência
import { Injectable } from '@angular/core';

// Importar o HttpClient
import { HttpClient } from '@angular/common/http';

// Importar o modelo de produto
import { Produto } from '../modelo/Produto';

// Importar o RxJS
import { Observable } from 'rxjs';

// Configuração do @Injectable
@Injectable({
  providedIn: 'root'
})

// Classe
export class ProdutoService {

  // URL da API
  url:string = 'http://localhost:3000/produtos';

  // Primeiro método a ser executado quando referenciada a classe de serviço
  constructor(private http:HttpClient) { }

  // Método para selecionar produtos
  selecionar():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url);
  }

  // Método para cadastrar produtos
  cadastrar(obj:Produto):Observable<Produto>{
    return this.http.post<Produto>(this.url, obj);
  }

  // Método para alterar produtos
  alterar(obj:Produto):Observable<Produto>{
    return this.http.put<Produto>(`${this.url}/${obj.id}`, obj);
  }

  // Método para remover produtos
  remover(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}

```

#### Listagem dos produtos
arquivo: `componente13.component.ts``

```
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';

@Component({
  selector: 'app-componente13',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente13.component.html',
  styleUrl: './componente13.component.css'
})
export class Componente13Component {

// vetor para armazenar os produtos vindo da api
vetor:Produto[] = [];

// Construtor pra ter acesso a todas as funcoes do serviço
constructor(private servico:ProdutoService){}

// Inicialização do componente
ngOnInit(){
  this.selecionar();
}

// metodo para selecionar todos os produtos
selecionar(){

// o retorno da api esta sendo adicionada ao vetor
this.servico.selecionar().subscribe(retorno => {this.vetor = retorno});

}

}

```

arquivo: `componente13.component.ts`

```

<form>
    <input type="number" class="form-control" readonly>
    <input type="text" class="form-control" placeholder="Nome">
    <input type="number" class="form-control" placeholder="Valor">

    <input type="button" class="btn btn-primary" value="Cadastrar">
    <input type="button" class="btn btn-primary" value="Alterar">
    <input type="button" class="btn btn-primary" value="Remover">
</form>

<table class="table table-striped">
    <thead>
    <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Valor</th>
        <th>Selecionar</th>
    </tr>
    </thead>

    <tbody>
        <tr  *ngFor="let v of vetor; let indice = index">
            <td>{{ indice + 1 }}</td>
            <td>{{ v.nome }}</td>
            <td>{{ v.valor }}</td>
            <td><button class="btn btn-primary">Selecionar</button></td>
        </tr>
    </tbody>

</table>

```

#### Visibilidade dos botões
arquivo: `componente13.component.ts`

Abaixo da Variavel vetor, crie uma variavel para trabalhar a visibilidade

```
// Visibilidade dos botões
btnCadastrar:boolean = true;

```

arquivo: `componente13.component.html`

```
<form>
    <input type="number" class="form-control" readonly>
    <input type="text" class="form-control" placeholder="Nome">
    <input type="number" class="form-control" placeholder="Valor">

    <!-- Quando o botao de cadastrar for verdadeiro, apenas o botao de cadastro fica visivel -->
    <!-- Quando ocorrer o contrario os botão de cadastro ficará oculto e os demais visiveis -->
    <input type="button" class="btn btn-primary" value="Cadastrar"  *ngIf="btnCadastrar">
    <input type="button" class="btn btn-primary" value="Alterar"    *ngIf="!btnCadastrar">
    <input type="button" class="btn btn-primary" value="Remover"    *ngIf="!btnCadastrar">
</form>

```
PODE TESTAR

#### Criar o formulario reativo
arquivo: `componente13.component.ts`

Abaixo da Variavel btnCadastrar

```
// Objeto de formulario
  formulario = new FormGroup({
    id:     new FormControl(null), // devido o id ser um valor numerico vamos definir como nulo
    nome:   new FormControl(''), // como o nome do produto é texto usaremos ''
    valor:  new FormControl(null) // devido ser valor numerico vamos definir como nulo
  });

```
Verifique se o ReactiveFormsModule foi importado

```
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],

```

arquivo: `componente13.component.html`

```
<form [formGroup]="formulario"> 
    <input type="number" class="form-control" formControlName="id" readonly>
    <input type="text" class="form-control"   formControlName="nome"  placeholder="Nome">
    <input type="number" class="form-control" formControlName="valor"  placeholder="Valor">

```

#### Cadastro de produtos
arquivo: `componente13.component.ts`

Abaixo do metodo para selecionar todos os produtos

```
// metodo para cadastrar produtos
  cadastrar(){
    this.servico.cadastrar(this.formulario.value as Produto) // informamos que pode ser tratado como modelo de produto

    .subscribe(retorno => {

      this.vetor.push(retorno);

      this.formulario.reset();

    });
  }

  ```

 arquivo: `componente13.component.html`

 ```
    <!-- Quando o botao de cadastrar for verdadeiro, apenas o botao de cadastro fica visivel -->
    <!-- Quando ocorrer o contrario os botão de cadastro ficará oculto e os demais visiveis -->
    <input type="button" class="btn btn-primary" value="Cadastrar"  *ngIf="btnCadastrar" (click)="cadastrar()">
    <input type="button" class="btn btn-primary" value="Alterar"    *ngIf="!btnCadastrar">
    <input type="button" class="btn btn-primary" value="Remover"    *ngIf="!btnCadastrar">

 ```
PODE TESTAR

#### Selecionar produto especifico

arquivo: `componente13.component.ts`

Abaixo do metodo para cadastrar produtos

```
/ metodo para selecionar um produto especifico
  selecionarProduto(indice:number){

    this.formulario.setValue({
      id: this.vetor[indice].id,
      nome: this.vetor[indice].nome,
      valor: this.vetor[indice].valor
    });

    this.btnCadastrar = false;

  }

```

 arquivo: `componente13.component.html`

 ```
<tbody>
        <tr  *ngFor="let v of vetor; let indice = index">
            <td>{{ indice + 1 }}</td>
            <td>{{ v.nome }}</td>
            <td>{{ v.valor }}</td>
            <td><button class="btn btn-primary" (click)="selecionarProduto(indice)">Selecionar</button></td>
        </tr>
    </tbody>

 ```

 PODE TESTAR

 #### Alteração de produto

 arquivo: `componente13.component.ts`

 abaixo de metodo para selecionar um produto especifico

 ```
// metodo para alterar produtos
  alterar(){
    this.servico.alterar(this.formulario.value as Produto)
    .subscribe(retorno => {

      // Obter o indice do objeto alterado
      let indiceAlterado = this.vetor.findIndex(obj => {
          this.formulario.value.id === obj.id;
      }); // basicamente cada linha do vetor


      // alterar o vetor
      this.vetor[indiceAlterado] = retorno;

      //limpar o formulario
      this.formulario.reset();

      // visibilidade dos botoes
      this.btnCadastrar = true;

    })
  }
```

 arquivo: `componente13.component.html`

 ```
    <input type="button" class="btn btn-primary" value="Cadastrar"  *ngIf="btnCadastrar" (click)="cadastrar()">
    <input type="button" class="btn btn-primary" value="Alterar"    *ngIf="!btnCadastrar" (click)="alterar()">
    <input type="button" class="btn btn-primary" value="Remover"    *ngIf="!btnCadastrar">

 ```

 PODE TESTAR


 #### Remover produtos

  arquivo: `componente13.component.ts`

abaixo do metodo para alterar produtos

```
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


```

arquivo: `componente13.component.html`
```
    <input type="button" class="btn btn-primary" value="Cadastrar"  *ngIf="btnCadastrar" (click)="cadastrar()">
    <input type="button" class="btn btn-primary" value="Alterar"    *ngIf="!btnCadastrar" (click)="alterar()">
    <input type="button" class="btn btn-primary" value="Remover"    *ngIf="!btnCadastrar" (click)="remover()">

```

PODE TESTAR