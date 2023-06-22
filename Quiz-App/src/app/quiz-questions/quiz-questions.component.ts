import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css'],
})
export class QuizQuestionsComponent {
  constructor(public apiService: ApiServiceService) {}

  datoId: string = this.apiService.IdCategoryDifficulty;
  ngOnInit() {
    this.stampa();
  }

  stampa(): void {
    console.log('Dato servie:' + this.datoId);
  }
}
