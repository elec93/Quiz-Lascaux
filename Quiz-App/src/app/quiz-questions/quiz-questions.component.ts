import { Component, ElementRef, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { HttpClient } from '@angular/common/http';
import { Answer, Trivia } from '../model/trivia';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css'],
})
export class QuizQuestionsComponent implements OnInit {
  constructor(
    public apiService: ApiServiceService,
    private http: HttpClient,
    private elementRef: ElementRef
  ) {}

  trivias: any;

  ngOnInit(): void {
    this.getData();
    this.stampa();
    this.random();
  }
  random(): void {
    const ul = this.elementRef.nativeElement.querySelector('ul');
    for (let i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[(Math.random() * i) | 0]);
    }
  }

  stampa(): void {
    /* console.log(this.apiService.getUrlFinale()); */
  }

  getData(): void {
    this.http.get<any>(this.apiService.getUrlFinale()).subscribe((data) => {
      this.trivias = data.results.map((element: any) => {
        const t = new Trivia();
        t.category = element.category;
        t.difficulty = element.difficulty;
        t.question = element.question;
        const answers: any = [];

        const answer1 = new Answer();
        answer1.text = element.correct_answer;
        answer1.correct = true;
        answer1.selected = false;
        answers.push(answer1);

        element.incorrect_answers.forEach((x: any) => {
          const answer2 = new Answer();
          answer2.text = x;
          answer2.correct = false;
          answer2.selected = false;
          answers.push(answer2);
        });

        t.answers = answers;
        // answers random
        return t;
      });
      console.log(this.trivias);
    });
  }

  selectedAnswer(answer: any, trivia: any) {
    this.trivias
      .filter((t: any) => t.question === trivia.question)
      .forEach((t: any) => {
        const ans = t.answers.filter((a: any) => a.text === answer.text)[0];
        ans.selected = true;
      });
  }
}
