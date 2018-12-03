import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
import { FakeUserService } from './fake-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  public users$ = this.fakeUserService.users$;
  public filteredUsers$ = this.users$;
  // public searchText = new BehaviorSubject<string>('').pipe(debounceTime(200));
  constructor(private fakeUserService: FakeUserService) {
    fakeUserService.populateUsers(1000);
  }

  filterUsers(searchText: string) {
    if (!searchText) {
      this.filteredUsers$ = this.users$;
    } else {
      this.filteredUsers$ = this.users$.pipe(
        map(users => {
          console.log('mapping!', users.length);
          return users.filter(user => Object.values(user).includes(searchText));
        })
      );
    }
  }
}
