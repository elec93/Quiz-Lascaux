import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css'],
})
export class QuizQuestionsComponent {
  constructor(public apiService: ApiServiceService) {}

  datoId: string = this.apiService.idCategoryService;
  datoDifficulty: string = this.apiService.difficultyService;
  ngOnInit() {
    this.stampa();
  }

  stampa(): void {
    console.log('Dato service Id:' + this.datoId);
    console.log('Dato servie Diff:' + this.datoDifficulty);
  }
}
