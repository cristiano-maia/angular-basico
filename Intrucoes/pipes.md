Pipes 
Tecnica para alterar valores de variaveis ou objeto

1. Crie um novo componente:
`ng g c componente12`

2. Executar o servidor:
`ng s`

3. Abra app.component.html e aponte para o componente criado
`<app-componente12></app-componente12>``

4. Abra o navegador e verifique o esta carregando normalmente
`componente12 works!``

5. Abra a pasta componente12  - arquivo componente12.component.ts
faça o import do CommonModule `imports: [CommonModule]`

<hr>
[PIPES NATIVOS DO ANGULAR NA VERSÃO 17]

Os Pipes disponíveis no Angular 17 são:
- Currency Pipe;
- Date Pipe;
- Json Pipe;
- LowerCase Pipe;
- UpperCase Pipe ;
- PercentPipe;
- SlicePipe;
- TitleCasePipe;
- AsyncPipe.

Abaixo deixarei uma breve descrição e um exemplo de cada um:

* Currency: Para trabalhar com valores monetários, exemplo: * 
```
// Variável do arquivo TS
valor: number = 12345.6789;

// Estrutura do arquivo HTML
<p>{{ valor | currency }}</p> (Retorna $12,345.68)
<p>{{ valor | currency:'EUR':'symbol-narrow':'4.2-2' }}</p> (Retorna €12,345.68)

* Date: Para trabalhar com datas e horas, exemplo: * 

// Variável do arquivo TS
dataAtual: Date = new Date(); // Supondo que a data é: 03/03/2024

// Estrutura do arquivo HTML:
<p>{{ dataAtual | date }}</p> (Retorna Mar 3, 2024)`
<p>{{ dataAtual | date:'fullDate' }}</p> (Retorna Friday, March 3, 2024)
<p>{{ dataAtual | date:'short' }}</p> (Retorna 3/3/24, 12:17 AM)`
```

* JSON: Para exibir estrutura de objetos no formato JSON, exemplo: * 
```
// Variável do arquivo TS
pessoa:any = {'nome':'Cristiano', 'idade':46};

// Estrutura do arquivo HTML:
<p>{{ pessoa | json }}</p> (Retorna {'nome':'Cristiano', 'idade':46})
```


* LOWERCASE: Retorna todas as letras em minúsculas * 
```
// Variável do arquivo TS
nome:string = 'Cristiano';

// Estrutura do arquivo HTML:
<p>{{ nome | lowercase }}</p> (Retorna cristiao)
```


* UPPERCASE: Retorna todas as letras em maiúsculas * 
```
// Variável do arquivo TS
nome:string = 'Cristiano';

// Estrutura do arquivo HTML:
<p>{{ nome | uppercase }}</p> (Retorna CRISTIANO)
```


* PERCENT: Transforma um número em percentual * 

```
// Variável do arquivo TS
numero:number = 0.23;

// Estrutura do arquivo HTML:
<p>{{ numero | percent }}</p> (Retorna 23%)
```


* SLICE: Extrai caracteres de uma palavra ou frase. Também é possível trabalhar com vetores (arrays), exemplo: 
```
// Variáveis do arquivo TS
vetor: any[] = ['azul', 'verde', 'vermelho', 'amarelo', 'rosa'];
texto: string = 'Hello World!';

// Estrutura do arquivo HTML:
<p>{{ vetor | slice:1:3 }}</p> (Retorna verde e vermelho)
<p>{{ texto | slice:0:5 }}</p> (Retorna Hello)
```


* TITLECASE: A letra inicial de cada palavra ficará em maiúscula, as demais ficarão em minúsculas, exemplo: * 
```
// Variável do arquivo TS
texto:string = 'aprendendo angular 17 ';

// Estrutura do arquivo HTML:
<p>{{ texto | titlecase }}</p> (Retorna Aprendendo Angular 17 )
```

* ASYNC: Pipe para trabalhar com estruturas assíncronas, exemplo: * 

// Variáveis do arquivo TS
`meuObservable: Observable<number> = of(42);`
`minhaPromessa: Promise<string> = Promise.resolve('Hello World!');`

// Estrutura do arquivo HTML:
`<p>{{ meuObservable | async }}</p> (Retorna 42)`
`<p>{{ minhaPromessa | async }}</p> (Retorna Hello World!)`

<hr>

6. Crie as variavel e objetos arquivo componente12.compontent.ts
 ```
 export class Componente12Component {

  // Variavel tipo texto
  nome:string = 'Cristiano';
  
 // Objeto
 // a palavra-chave any significa que a variável pode conter qualquer tipo de dado. Isso implica que o TypeScript não fará nenhuma verificação de tipo sobre o conteúdo dessa variável.
  
  obj:any = {'nome':'Cristiano', 'idade':46};

}
````

7. Abra o arquivo html do componente12.component.html

```

<h1>Trabalhando com pipes</h1>
<p><b>Convertendo para maiuscula: </b>{{nome | uppercase}}</p>
<p><b>Convertendo para minuscula:</b> {{nome | lowercase}}</p>
<p><b>Extraindo o valor nome do objeto:</b> {{ obj.nome }}</p>
<p><b>Estraindo o valor idade do objeto:</b> {{ obj.idade }}</p>
<p><b>Extraindo todos os valores do objeto:</b> {{ obj | json }}</p>

```
