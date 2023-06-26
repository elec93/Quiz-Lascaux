import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
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
