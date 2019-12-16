import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const routes: Routes = [
  {path:"add",component:AddComponent},
  {path:"list",component:ListComponent},
  {path:"details/:id",component:UserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
