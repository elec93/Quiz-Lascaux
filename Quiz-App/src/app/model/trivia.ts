export class Trivia {
  category!: string;
  difficulty!: string;
  question!: string;
  answers!: Answer[];
}

export class Answer {
  text!: string;
  correct!: boolean;
  selected!: boolean;
}
