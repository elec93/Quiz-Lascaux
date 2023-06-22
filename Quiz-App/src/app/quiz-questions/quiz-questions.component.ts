import { Component, ElementRef } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css'],
})
export class QuizQuestionsComponent {
  constructor(
    public apiService: ApiServiceService,
    private http: HttpClient,
    private elementRef: ElementRef
  ) {}
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

      /*  this.shuffleListItems(); */

      // Assegna i dati ottenuti dall'API alla variabile data
      // Puoi eseguire ulteriori operazioni con i dati qui, se necessario
    });
  }

  ngAfterViewInit() {
    const ul = this.elementRef.nativeElement.querySelector('ul');
    for (let i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[(Math.random() * i) | 0]);
    }
  }
}
