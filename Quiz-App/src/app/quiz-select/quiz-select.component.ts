import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz-select',
  templateUrl: './quiz-select.component.html',
  styleUrls: ['./quiz-select.component.css'],
})
export class QuizSelectComponent {
  apiData: any;
  categories: any[] = [];

  // valori di difficulty e IdCategoy che verranno passati nel componente question con il service (sendDatas())
  selectedDifficulty!: string;
  idCategory!: string;

  constructor(
    private http: HttpClient,
    private apiService: ApiServiceService
  ) {}

  //All'avvio del componente ottieni le categorie
  ngOnInit() {
    this.getCategories();
  }

  //Richiesta HTTP GET all'API per ottenere le categorie
  getCategories(): void {
    const urlCategories = `https://opentdb.com/api_category.php`;
    this.http.get<any>(urlCategories).subscribe(
      (data) => {
        this.apiData = data; //Assegna i dati ottenuti dall'API alla variabile apiData
        this.categories = this.apiData.trivia_categories; //Assegna le categorie ottenuti dall'API alla variabile categories
      },
      (error) => {
        console.error('Failed to get data:', error);
      }
    );

    console.log(this.selectedDifficulty); //test
    console.log(this.idCategory); //test

    this.sendDatas();
  }

  //I valori selezionati dall'utente vengono passati al servizio ApiServiceService per poter essere utilizzati successivamente
  sendDatas() {
    this.apiService.difficultyService = this.selectedDifficulty;
    this.apiService.idCategoryService = this.idCategory;
  }
}
