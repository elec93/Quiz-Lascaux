import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { HttpClient } from '@angular/common/http';
import { Answer, Trivia } from '../model/trivia';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css'],
})
export class QuizQuestionsComponent implements OnInit {
  constructor(public apiService: ApiServiceService, private http: HttpClient) {}

  trivias: any;
  showResult = false;
  correctAnswers = 0;

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    // chiamata http con url che mi da domande e risposta - con subscribe accedo a dati dell'url --> data sono i dati estratti dall'url
    this.http.get<any>(this.apiService.getUrlFinale()).subscribe((data) => {
      // trivia sarà = a una copia di data (con tutti i dati dell url)
      // element --> elementi di data
      this.trivias = data.results.map((element: any) => {
        // t = oggetto vuoto (Trivia class)
        const t = new Trivia();

        // Per ogni elemento della lista delle domande, viene creato un nuovo oggetto Trivia
        t.category = element.category;
        t.difficulty = element.difficulty;
        t.question = element.question;
        // array per risposte
        const answers: any = [];

        // Creazione dell'oggetto Answer per la risposta corretta
        const answer1 = new Answer();
        answer1.text = element.correct_answer;
        answer1.correct = true;
        answer1.selected = false;
        answers.push(answer1);

        // Per ogni risposta errata, viene creato un nuovo oggetto Answer,
        // false per indicare che è una risposta errata o che non è stata selezionata.
        element.incorrect_answers.forEach((x: any) => {
          const answer2 = new Answer();
          answer2.text = x;
          answer2.correct = false;
          answer2.selected = false;
          answers.push(answer2);
        });

        t.answers = answers;

        // answers random
        this.shuffleAnswers(t);
        return t;
      });
      console.log(this.trivias);
    });
  }

  selectedAnswer(answer: any, trivia: any) {
    this.trivias.forEach((t: any) => {
      if (t.question === trivia.question) {
        t.answers.forEach((a: any) => {
          if (a.text === answer.text) {
            a.selected = true;
          } else {
            a.selected = false;
          }
        });
      }
    });
  }

  //al click fa il calcolo delle risposte corrette
  //in rosso quelle errate in verde quelle
  calculateResult(): void {
    let correctCount = 0;
    this.trivias.forEach((trivia: any) => {
      const selectedAnswer = trivia.answers.find(
        (answer: any) => answer.selected
      );
      if (selectedAnswer && selectedAnswer.correct) {
        correctCount++;
      }
    });
    this.correctAnswers = correctCount;
    this.showResult = true;

    this.selectedAnswersColor(); // Evidenzia le risposte selezionate
  }

  selectedAnswersColor(): void {
    this.trivias.forEach((trivia: any) => {
      trivia.answers.forEach((answer: any) => {
        if (answer.correct) {
          answer.correctlySelected = true;
        } else if (answer.selected) {
          if (answer.correct) {
            answer.correctlySelected = true;
          } else {
            answer.incorrect = true;
          }
        }
      });
    });
  }

  // sotto questions, bottoni answers random
  shuffleAnswers(trivia: any): void {
    trivia.answers = trivia.answers.sort(() => Math.random() - 0.5);
  }
}
