import { Component } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"
@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {

  title:string = "";
  questions:any;
  questionselected: any;

  answers:string[] = [];

  answerSelected:string = "";

  questionIndex:number = 0;
  questionMaxIndex:number = 0;

  finished:boolean = false;

  constructor(){

  }
  ngOnInit(): void {
    if(quizz_questions){
      this.finished = false;
      this.title = quizz_questions.title;
      this.questions = quizz_questions.questions;
      this.questionselected = this.questions[this.questionIndex];

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;

    }
  }

  playerChoose(value:string){
    this.answers.push(value);
    console.log(this.answers);
    this.nextStep();
  }
  async nextStep(){
    this.questionIndex++;
    if(this.questionIndex < this.questionMaxIndex){
      this.questionselected = this.questions[this.questionIndex];
    }
    else{
      const finalAnswer:string = await this.checkResult();
      this.finished = true;
      console.log("Acabou");
      console.log(this.answers);
      this.answerSelected = quizz_questions.results[finalAnswer as keyof typeof quizz_questions.results];
      this.checkResult();
    }
  }
  async checkResult(){
    // ver qual o resultado baseado nas respostas. Caso tenha mais A sera Heroi, caso B Vilao;
    const result = this.answers.reduce((previous, current, i, arr)=>{
      if(arr.filter(item => item === previous).length>
        arr.filter(item => item === current).length){
          return previous;
      }
      else{
        return current;
      }
    });
    return result;
  }
}
