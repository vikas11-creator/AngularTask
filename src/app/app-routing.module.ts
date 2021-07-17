import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserpostComponent } from './userpost/userpost.component';

const routes: Routes = [
  {path:'', redirectTo:'userlist',pathMatch:'full' },
  {path:'userlist',component:UserlistComponent},
  {path:'userpost/:id',component:UserpostComponent},
   {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
