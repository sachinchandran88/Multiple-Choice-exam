import { Component, OnInit , Input,OnChanges , Output , EventEmitter} from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {Question} from 'src/app/model/question';
import{QuestionService} from 'src/app/service/question.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnChanges {
  @Input() editId : number;
  @Output() newRow = new EventEmitter<Question>();
  questionForm : FormGroup;
  questionId : Question;
  QuestinsRow : Question;
  Data : Question;
  constructor(private service : QuestionService , public formbuilder:FormBuilder) { }

  ngOnChanges(): void {
   
    let id = this.editId;
    this.service.editQuestion(id).subscribe(data=>{
         this.QuestinsRow = data;
         this.questionForm = this.formbuilder.group({
            id: [this.QuestinsRow.id],
            question : [this.QuestinsRow.question],
            choice1 : [this.QuestinsRow.choice1],
            choice2 : [this.QuestinsRow.choice2],
            choice3 : [this.QuestinsRow.choice3],
            answer : [this.QuestinsRow.answer],
         })
    })
   
   
    this.questionForm = this.formbuilder.group({
          id : [''],
          question : [''],
          choice1 : [''],
          choice2 : [''],
          choice3 : [''],
          answer : [''],
    })

  }
  clear()
  {
    this.questionForm.reset();
  }

  onSubmit()
  {
      let from = this.questionForm.value;
      if(this.editId > 0)
      {
        this.service.update(this.editId,from).subscribe(data=>{
          this.Data = from;
          this.newRow.emit(this.Data);
        });
      }
      this.service.addQuestion(from).subscribe(data=>{
        this.questionId = data;
        from.id = this.questionId;
        this.questionForm.reset();
        this.service.subject.next(from);
      }) ;
  }
  

}
