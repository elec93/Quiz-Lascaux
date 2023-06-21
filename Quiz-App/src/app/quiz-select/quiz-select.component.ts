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
  constructor(private http: HttpClient) {}

  getCategory(): void {
    const urlCategories = `https://opentdb.com/api.php?amount=5&category=9&difficulty=easy`;
    this.http.get<any>(urlCategories).subscribe(
      (data) => {
        this.apiData = data; // Assegna i dati ottenuti dall'API alla variabile apiData
      },
      (error) => {
        console.error('Failed to get data:', error);
      }
    );
    console.log(this.apiData);
    console.log(this.apiData.trivia_categories[0].name);
    let categories = this.apiData.trivia_categories[0].name;
  }
}
/* getData() {
    this.dataApi.getData().subscribe((data) => {
      console.log(data);
      this.apiData = data;
      console.log(this.apiData.results[1].category);
    });
  }

  /*   get getCategory(): HttpClient {
    return this.contactForm.get('details')?.get('languageSkills') as FormArray; // contenuto lo identifico come FormArray
  }
}
 */
