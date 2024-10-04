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
<hr>

#### Resumo de Conteúdos Estudados no Angular

1. **Execução de projetos no Angular 17**:  
   Comando inicial para criar e rodar um projeto Angular, geralmente feito com `ng new` para criar e `ng serve` para executar o servidor de desenvolvimento.

2. **Criação de componente**:  
   Componentes são as unidades modulares do Angular que controlam parte do HTML e lógica da aplicação. Criados com `ng generate component`, eles contêm templates, estilos e lógica específica para aquela parte da interface.

3. **Interpolação de textos {{}}**:  
   Sintaxe usada para exibir dados dinâmicos nas views do Angular. Coloca variáveis ou expressões entre chaves duplas dentro de um template HTML.

4. **Event binding**:  
   Técnica usada para responder a eventos do DOM, como cliques, através de atributos no template Angular. Por exemplo: `(click)="onClick()"`.

5. **Property binding**:  
   Método para vincular valores do componente às propriedades de elementos do DOM. Exemplo: `[src]="imageUrl"` para dinamicamente definir a fonte de uma imagem.

6. **Diretiva ngIf**:  
   Diretiva estrutural usada para mostrar ou esconder elementos no DOM baseado em uma condição booleana. Exemplo: `<div *ngIf="isVisible">Conteúdo</div>`.

7. **Diretiva ngFor**:  
   Diretiva que permite iterar sobre coleções e gerar uma lista de elementos dinamicamente. Exemplo: `<li *ngFor="let item of items">{{ item }}</li>`.

8. **Diretiva ngSwitch**:  
   Semelhante ao `switch` em linguagens de programação, permite alternar entre múltiplos elementos com base em um valor. Exemplo: `<div *ngSwitchCase="expression">`.

9. **Diretiva ngStyle**:  
   Usada para aplicar estilos dinamicamente aos elementos. Exemplo: `[ngStyle]="{'color': textColor}"`.

10. **Diretiva ngClass**:  
   Aplicada para adicionar ou remover classes CSS dinamicamente. Exemplo: `[ngClass]="{'active': isActive}"`.

11. **Control Flow - Condicional**:  
    Controle de fluxo que permite tomar decisões no código com base em condições. Exemplo: `if` para verificar uma condição e executar blocos específicos de código.

12. **Control Flow - Laço de repetição**:  
    Estruturas como `for` ou `while` que repetem ações enquanto uma condição é verdadeira, normalmente usadas para percorrer arrays ou realizar tarefas repetitivas.

13. **Control Flow - Estrutura de escolha**:  
    Estrutura que permite selecionar uma entre várias opções, como o `switch` em JavaScript, que escolhe a execução de blocos de código com base em diferentes valores.

14. **Configurando Bootstrap**:  
    Integração da biblioteca de CSS Bootstrap em um projeto Angular para estilizar componentes e layouts de forma rápida e responsiva.

15. **FormsModule**:  
    Módulo Angular que facilita a criação de formulários simples, manipulando campos de entrada de maneira automática e vinculando dados do componente ao template.

16. **Reactive Forms**:  
    Módulo de formulários reativos do Angular que permite criar formulários mais complexos, com controle total sobre a lógica e a validação, usando programação reativa com `FormGroup`, `FormControl`, e `FormBuilder`.