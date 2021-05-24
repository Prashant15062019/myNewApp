import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{ path: '', redirectTo: 'user', pathMatch: 'full' },{ path: 'user', component:UsersComponent},{ path: 'photo', component:PhotosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
