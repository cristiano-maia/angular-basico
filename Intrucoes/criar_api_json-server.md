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

