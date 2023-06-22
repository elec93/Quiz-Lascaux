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
  categories: any[] = []; // Array to store the categories

  // valori di difficulty e IdCategoy che verranno sappati nel componente question con il service (sendDatas())
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
        this.categories = this.apiData.trivia_categories; // Assign categories to the array
      },
      (error) => {
        console.error('Failed to get data:', error);
      }
    );
    /* console.log(this.apiData); */
    /*     console.log(this.apiData.trivia_categories[0].name);
    let categories = this.apiData.trivia_categories[0].name; */
    console.log(this.selectedDifficulty);
    console.log(this.idCategory);
    this.sendDatas();
  }

  sendDatas() {
    this.apiService.difficultyService = this.selectedDifficulty;
    this.apiService.idCategoryService = this.idCategory;
  }
}
/* getData() {
    this.dataApi.getData().subscribe((data) => {
      console.log(data);
      this.apiData = data;
      console.log(this.apiData.results[1].category);
    });
  }

  getDifficulties(): void {
    const urlCategories = `https://opentdb.com/api_difficulty.php`;
    this.http.get<any>(urlCategories).subscribe(
      (data) => {
        this.apiData = data; // Assegna i dati ottenuti dall'API alla variabile apiData
        this.difficulties = this.apiData.trivia_difficulties; // Assign categories to the array
      },
      (error) => {
        console.error('Failed to get data:', error);
      }
    );
  }*/
