import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  chansons = [
    {
      titre: "La Vie en Rose",
      interprete : "Edith Piaf",
      taille : 2652897
    },
    {
      titre: "Le Poinçonneur des Lilas",
      interprete : "Serge Gainsbourg",
      taille : 1950259
    },
    {
      titre: "La Mauvaise Réputation",
      interprete : "Georges Brassens",
      taille : 2754729
    }
  ]
}
