import { Component, OnInit ,Input,Output,EventEmitter,OnChanges } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { UserModel } from 'src/app/model/user-model';
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnChanges {
  userDetail : UserModel;
  userForm: FormGroup ;
  user : UserModel;
  Data : UserModel;
  @Input() userData: number ;
  @Output() newData = new EventEmitter<UserModel>();
  constructor(public service : UsersService , public formbuilder:FormBuilder ){
  }
 
  ngOnChanges()
  {
    let id = this.userData;
    if(id > 0){
      this.service.editUser(id).subscribe(data =>{
      this.userDetail = data;
      this.userForm = this.formbuilder.group({
          user_id : [this.userDetail.user_id],
          first_name : [this.userDetail.first_name],
          last_name  : [this.userDetail.last_name],
          email  : [this.userDetail.email],
          password  : [this.userDetail.password] 
      });
    });
  }else{
    console.log("i am in else part");
    this.userForm = this.formbuilder.group({
      user_id : ['',],
      first_name : ['',[Validators.required]],
      last_name  : ['',[Validators.required]],
      email  : ['',[Validators.required, Validators.email]],
      password  : ['',[Validators.required,Validators.minLength(4)]]
  
   });
  }

  }
 


  clear()
  {
    this.userForm.reset();
  }
 
  onSubmit(){
    
   let Form = this.userForm.value;
   if(this.userData > 0)
   {   
        this.service.update(this.userData,Form).subscribe(data=>{
        this.userForm.reset();
       })
        this.Data = Form;
        this.newData.emit(this.Data);
   }else{
    this.service.addUser(Form).subscribe((data) =>{ 
       this.user = data ;
       Form.user_id = this.user;
       this.userForm.reset();
     }); 
     this.service.addRow(Form);
    
  }
  }

}
