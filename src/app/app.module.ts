import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { Ma4jay3Component } from './ma4jay3/ma4jay3.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { NotFoundComponent } from './not-found/not-found.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { EditStudentComponent } from './edit-student/edit-student.component';
import {CalendarModule} from 'primeng/calendar';
import { PokemongoComponent } from './pokemongo/pokemongo.component';
import { StatusPipe } from './status.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    Ma4jay3Component,
    StudentComponent,
    HomeComponent,
    AddstudentComponent,
    PokemonComponent,
    NotFoundComponent,
    EditStudentComponent,
    PokemongoComponent,
    StatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    CalendarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
