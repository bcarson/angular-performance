import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FakeUserService } from './fake-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  public users = this.fakeUserService.getUsers(1000);
  public filteredUsers = this.users;
  public searchText = new BehaviorSubject<string>('').pipe(debounceTime(200));
  constructor(private fakeUserService: FakeUserService) {}

  filterUsers(searchText: string) {
    if (!searchText) this.filteredUsers = this.users;
    else
      this.filteredUsers = this.users.filter(user => {
        console.log('comparing', searchText, user.firstName);
        return Object.values(user).some((value: string) =>
          value.toLowerCase().includes(searchText.toLowerCase())
        );
      });
  }
}
