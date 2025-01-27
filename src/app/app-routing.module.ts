import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { UsersComponent } from './users/users.component';
import { PostedComponent } from './posted/posted.component';

const routes: Routes = [
  {
    path:'',component:FormComponent
  },
  {
    path:"users",component:UsersComponent
  },
  {
    path:"posted",component:PostedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
