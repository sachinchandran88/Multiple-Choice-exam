import { Component, OnInit , Input} from '@angular/core';
import{QuestionService} from 'src/app/service/question.service';
import {Question} from 'src/app/model/question';
@Component({
  selector: 'app-querstions',
  templateUrl: './querstions.component.html',
  styleUrls: ['./querstions.component.css']
})
export class QuerstionsComponent implements OnInit {
  questions : Question[] = [];
  Quesid : number;
  constructor(private service : QuestionService) {
       this.service.subject.subscribe(newdata=>{
        console.log(newdata);    
        this.questions.push(newdata);
       })
   }
  show : boolean = false;
  ngOnInit(): void {
    this.getQuestion();
  }

  onSubmit(Data : Question)
  {
    var index = this.questions.find(e=>e.id == Data.id);
    Object.assign(index,Data);
  }

  add()
  {
    this.show = true;
  }

  close()
  {
    this.show = !this.show;
  }

  edit(id : number)
  {
     this.show = true;
     this.Quesid = id;
  }

  delete(id : number)
  {
    if(confirm('Are you sure to Delete this record ?' ) == true){
    this.service.delete(id).subscribe(()=>{
         this.questions = this.questions.filter(e => e.id !== id)
     });
    }
  }
  
  getQuestion(){
     this.service.getQuestion().subscribe(data=>{
         this.questions = data;
         console.log(data);
     });
  }


}
