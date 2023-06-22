import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css'],
})
export class QuizQuestionsComponent {
  constructor(public apiService: ApiServiceService, private http: HttpClient) {}
  /* urlFinale: string = this.apiService.getUrlFinale(); */
  data: any;

  /*  datoId: string = this.apiService.idCategoryService;
  datoDifficulty: string = this.apiService.difficultyService; */
  ngOnInit() {
    this.getData();
    this.stampa();
  }

  stampa(): void {
    console.log(this.apiService.getUrlFinale());

    /*  console.log('Dato service Id:' + this.datoId);
    console.log('Dato servie Diff:' + this.datoDifficulty); */
  }

  getData(): void {
    // const url = 'https://opentdb.com/api.php?amount=1&type=multiple';
    /*   const url =
      'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple';
 */
    this.http.get<any>(this.apiService.getUrlFinale()).subscribe((data) => {
      this.data = data;
      console.log(data);

      this.shuffleListItems();

      // Assegna i dati ottenuti dall'API alla variabile data
      // Puoi eseguire ulteriori operazioni con i dati qui, se necessario
    });
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  shuffleListItems() {
    const answers = [
      this.data.results[0].correct_answer,
      this.data.results[0].incorrect_answers[0],
      this.data.results[0].incorrect_answers[1],
      this.data.results[0].incorrect_answers[2],
    ];
    this.data.results[0].answers = this.shuffleArray(answers);
  }
}
