import { Injectable } from '@angular/core';
import {Question} from 'src/app/model/question';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Observable,Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  env : any = environment;
  subject :Subject<Question>;
  constructor(private Http : HttpClient) {
    this.subject = new Subject<Question>();
   }

 public getQuestion():Observable<Question[]>
 {
   return this.Http.get<Question[]>(this.env.apiUrl + '/questions/') ;
 } 

 public addQuestion(data : Question)
 {
    return this.Http.post<Question>(this.env.apiUrl + '/questions/index',data);
 }
 
 public editQuestion(id : number):Observable<Question>
 {
    return this.Http.get<Question>(this.env.apiUrl + '/questions/index/' + id);
 }

 public delete(id : number):Observable<Question>
 {
    return this.Http.delete<Question>(this.env.apiUrl + '/questions/index/' + id)
 }

 public update( id : number ,  data : Question , ):Observable<Question>
 {
    return this.Http.post<Question>(this.env.apiUrl + '/questions/index/' + id , data);
 }


}
