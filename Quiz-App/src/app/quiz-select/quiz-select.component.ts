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

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    const urlCategories = `https://opentdb.com/api_category.php`;
    this.http.get<any>(urlCategories).subscribe(
      (data) => {
        this.apiData = data; // Assegna i dati ottenuti dall'API alla variabile apiData
        this.categories = this.apiData.trivia_categories;
      },
      (error) => {
        console.error('Failed to get data:', error);
      }
    );

    console.log(this.selectedDifficulty);
    console.log(this.idCategory);
    this.sendDatas();
  }

  sendDatas() {
    this.apiService.difficultyService = this.selectedDifficulty;
    this.apiService.idCategoryService = this.idCategory;
  }
}
