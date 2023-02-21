import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './modules/shared/nav-bar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/Login/login/login.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { CoursesComponent } from './modules/user/module/courses/components/courses.component';
import { BatchComponent } from './modules/user/module/batch/components/batch/batch.component';
import { StudentsComponent } from './modules/user/module/students/students/students.component';
import { ProgramsComponent } from './modules/user/module/programs/programs/programs.component';
import { TeachersComponent } from './modules/user/module/teachers/teachers/teachers.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    CoursesComponent,
    BatchComponent,
    StudentsComponent,
    ProgramsComponent,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
