import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  /*   level: string = 'medium';
  get: any;

  constructor(private httpClient: HttpClient) {}

  getData() {
    let url = `https://opentdb.com/api.php?amount=5&category=9&difficulty=${this.level}&type=multiple`;
    return this.httpClient.get(url);
  } */

  IdCategoryDifficulty!: string;
}
