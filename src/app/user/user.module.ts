import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfumeModule } from 'perfume.js/angular';

import { UserComponent } from './user.component';
import { UserInputComponent } from './user-input/user-input.component';
import { UserListComponent } from './user-list/user-list.component';
import { FakeUserService } from './fake-user.service';
import { FilterPipe } from './filter.pipe';

const perfumeConfig = {
  firstPaint: true,
  firstContentfulPaint: true,
  firstInputDelay: true,
};

@NgModule({
  declarations: [
    FilterPipe,
    UserComponent,
    UserInputComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PerfumeModule.forRoot(perfumeConfig),
    ScrollingModule,
  ],
  exports: [UserComponent, UserInputComponent, UserListComponent],
  providers: [FakeUserService],
})
export class UserModule {}
