import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { ChildComponentComponent } from './child-component/child-component.component';
import { SecondChildComponent } from './second-child/second-child.component';



@NgModule({
  declarations: [UserListComponent, ChildComponentComponent, SecondChildComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    UserListComponent
  ]
})
export class UsersModule { }
