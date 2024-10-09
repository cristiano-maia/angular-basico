Pipes Customizados

1. Vamos criar uma pasta com o nome pipe e nosso pipe com o nome media
No terminal digite: `ng g p pipe/media`
Serão criados dois arquivos:
* ts: para regra de negocio
* spec.ts: para realizar os testes

2. No arquivo componente12.component.ts crie um vetor de objetos
```
// Vetor de objetos
alunos:any = [
    {'nome':'Amanda',  'nota1':8,  'nota2':9},
    {'nome':'Davi',  'nota1':7,  'nota2':8},
    {'nome':'Cristiano',  'nota1':3,  'nota2':2},
    {'nome':'Noah',  'nota1':7,  'nota2':7}
];

```

3. Abra o arquivo media.pipe.ts

```
/// Classe que calcula a média de duas notas.
export class MediaPipe implements PipeTransform {

  // O método "transform" recebe um objeto, pega as notas "nota1" e "nota2" e retorna a média delas.
  transform(objeto: any): number {
    return (objeto.nota1 + objeto.nota2) / 2;
  }
}

```

4. Abra o arquivo componente12.compontent.html
```
<table width="350">
    <thead>
    <tr>
        <th>Nome</th>
        <th>Nota 1</th>
        <th>Nota 2</th>
        <th>Media</th>
    </tr>
    </thead>

    <tbody>
        <tr *ngFor="let a of alunos">
            <td>{{ a.nome }}</td>
            <td>{{ a.nota1 }}</td>
            <td>{{ a.nota2 }}</td>
            <td>{{ a | media }}</td>
        </tr>
    </tbody>
</table>

```
Não esqueça de fazer o importe para o arquivo componente12.component.ts
```
import { MediaPipe } from '../pipe/media.pipe';

imports: [CommonModule, MediaPipe],

```

