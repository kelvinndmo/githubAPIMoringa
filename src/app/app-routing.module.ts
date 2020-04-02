import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent },

  { path: '', redirectTo: 'users', pathMatch: 'full' },

  { path: 'users/:username', component: UserDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
