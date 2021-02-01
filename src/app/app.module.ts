import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import { UserComponent } from './user/user.component';
import{GetComponent} from './user/get/get.component';
import { UsersService } from './service/users.service';
import {QuestionService}from './service/question.service';
import { QuerstionsComponent } from './querstions/querstions.component';
import { MCQModule } from './mcq/mcq.module';
import { CrudComponent } from './querstions/crud/crud.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GetComponent,
    QuerstionsComponent,
    CrudComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MCQModule,
  ],
  providers: [UsersService , QuestionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
