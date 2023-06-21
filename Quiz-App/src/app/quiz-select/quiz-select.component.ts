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
  difficulties: any[] = []; // Array to store the categories

  constructor(private http: HttpClient) {}

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
  }
}
