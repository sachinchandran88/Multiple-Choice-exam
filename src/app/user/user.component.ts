import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import {UserModel} from 'src/app/model/user-model';
import { User } from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  show : boolean  = false;
  users: UserModel[] = [] ;  
  userdata :number;
  constructor(public service : UsersService){    
    this.service.subject.subscribe(data=>{
      this.users.push(data);
    }) ;
  }

  
   
   ngOnInit()
   { 
     this.getdata();
   }

   getdata()
   {
  
    this.service.getUsers().subscribe((data) =>{
      this.users = data;
    }) ;
    
   }

   onSubmit(Data : UserModel)
   {
      var index = this.users.find(e=>e.user_id == Data.user_id);
      Object.assign(index,Data);
   }


   btnAdd()
   {
     this.show = true; 
     this.userdata = 0 ;   
   }

    close()
    {
      this.show = false;
    }
   
   onEdit(user_id:number)
   {
      this.show = true; 
      this.userdata = user_id; 
      //console.log("i am here");
   }
  
   onDelete(user_id:number)
   {
    if(confirm('Are you sure to Delete this record ?' ) == true){
    this.service.deleteUser(user_id).subscribe(()=>{    
      this.users = this.users.filter(users => users.user_id !== user_id);
    }
      
      );
    }
   }
}
 