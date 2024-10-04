#### Instale o node.js a partir da versão 18

1. Instalando o Angular 17
    `npm install -g @angular/cli@17`

2. Criando um projeto
    `ng new nome-do-projeto`
* Estilo do projeto: CSS
* Server-side rendering: Não

3. Abra o projeto no vscode, em um novo terminal digite o comando `ng s` para que o projeto seja disponibilizado no endereço: `localhost:4200`

Sobre o server-side rendering, ele está disponível na criação de projetos a partir da versão 17 do Angular, algumas vantagens ao utilizar:
*	Garante uma melhor performance
*	Melhora o uso de SEO

Importante saber que utilizando o server-side rendering, o servidor terá mais uma funcionalidade para realizar, já que ele será responsável por renderizar os projetos em Angular. Vale a pena utilizar essa técnica, caso o navegador tenha dificuldades para renderizar a aplicação.

Para executar um projeto utilizamos o comando ng s, mas temos outras opções:
`ng serve:` maneira padrão para executar um projeto Angular
`ng s:` faz o mesmo que o ng serve, porém encurtamos o termo serve para s