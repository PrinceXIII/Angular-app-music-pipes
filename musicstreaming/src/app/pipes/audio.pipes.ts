import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'tailleFichier'
})

export class tailleFichierPipe implements PipeTransform {
  transform(taille: number): string {
    return (taille/ (1024*1024)).toFixed(2) + 'MB';
  }
}
