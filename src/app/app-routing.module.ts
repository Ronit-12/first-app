import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/Login/login/login.component';
import { NavbarComponent } from './modules/shared/nav-bar/navbar.component';
import { CoursesComponent } from './modules/user/module/courses/components/courses.component';
import { BatchComponent } from './modules/user/module/batch/components/batch/batch.component';
import { StudentsComponent } from './modules/user/module/students/students/students.component';
import { ProgramsComponent } from './modules/user/module/programs/programs/programs.component';
import { TeachersComponent } from './modules/user/module/teachers/teachers/teachers.component';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'courses',component:CoursesComponent},
  {path:'batch',component:BatchComponent},
  {path:'students',component:StudentsComponent},
  {path:'programs',component:ProgramsComponent},
  {path:'teachers',component:TeachersComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
