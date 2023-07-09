import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', //servizio iniettabile in tutta l'applicazione
})
export class ApiServiceService {
  idCategoryService!: string;
  difficultyService!: string;

  getUrlFinale() {
    return (
      'https://opentdb.com/api.php?amount=5&category=' +
      this.idCategoryService +
      '&difficulty=' +
      this.difficultyService +
      '&type=multiple'
    );
  }
}

/*
La classe ApiServiceService è un servizio che fornisce un URL finale per la chiamata API
in base ai valori delle proprietà idCategoryService e difficultyService.
Quando viene iniettato in altre parti si ottiene l'URL finale per effettuare richieste all'API.
*/
