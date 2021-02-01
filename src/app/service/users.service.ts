import { Injectable } from '@angular/core';
import { Observable,Subject,BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserModel} from 'src/app/model/user-model';
import {environment} from 'src/environments/environment';
import { User } from '../user/get/record';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  env : any = environment;
  subject : Subject<UserModel>;
  user : UserModel
  behaveSub : BehaviorSubject<UserModel>;
 constructor(private httpClient: HttpClient) { 
    this.subject = new Subject<UserModel>();
    this.behaveSub = new BehaviorSubject<UserModel>(this.user);
 }  

 public getUsers(): Observable<UserModel[]>
 {
    return this.httpClient.get<UserModel[]>(this.env.apiUrl + '/user');
 }
 
 addRow(data:UserModel)
 {
    this.subject.next(data);
 } 

 
 public addUser(data:UserModel) 
 {
    return this.httpClient.post<UserModel>(this.env.apiUrl + 'user/index',data);
 }

 public deleteUser(user_id:number)
 {
    return this.httpClient.delete(this.env.apiUrl+'user/index/'+ user_id);
 }
 
 public editUser(user_id:number):Observable<UserModel>
 {
    return this.httpClient.get<UserModel>(this.env.apiUrl + '/user/index/' + user_id);
 }

 public update(user_id:number , data : UserModel):Observable<UserModel>
 {
    return this.httpClient.post<UserModel>(this.env.apiUrl + 'user/index/' + user_id , data)
 }

}

