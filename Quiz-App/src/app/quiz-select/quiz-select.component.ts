import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz-select',
  templateUrl: './quiz-select.component.html',
  styleUrls: ['./quiz-select.component.css'],
})
export class QuizSelectComponent {
  /* categories: string =  */
  constructor(private dataApi: ApiServiceService) {}

  getData(): void {
    this.dataApi.getData().subscribe((data) => {
      console.log(data);
      console.log(data.result[0].category);
    });
  }

  /*   get getCategory(): HttpClient {
    return this.contactForm.get('details')?.get('languageSkills') as FormArray; // contenuto lo identifico come FormArray
  } */
}
