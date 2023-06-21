import { QuizSelectComponent } from './quiz-select/quiz-select.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/quiz-select',
    pathMatch: 'full',
  },
  {
    path: 'quiz-select',
    component: QuizSelectComponent,
  },
  {
    path: 'questions',
    component: QuizQuestionsComponent,
  },
  {
    path: '**',
    redirectTo: '/quiz-select',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
