import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'media',
  standalone: true
})

/// Classe que calcula a média de duas notas.
export class MediaPipe implements PipeTransform {

  // O método "transform" recebe um objeto, pega as notas "nota1" e "nota2" e retorna a média delas.
  transform(objeto: any): number {
    return (objeto.nota1 + objeto.nota2) / 2;
  }
}


