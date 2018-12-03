import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class FakeUserService {
  private _users = new BehaviorSubject<User[]>([]);
  public users$: Observable<User[]> = this._users
    .asObservable()
    .pipe(shareReplay(1));

  populateUsers(n?: number) {
    let users: any[] = [];
    if (!n) n = 10; // default 10 users

    for (var i = 0; i < n; i++) {
      const user = {
        id: i.toString(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        avatar: faker.image.avatar(),
        email: faker.internet.email(),
      };

      users.push(user);
    }

    this._users.next(users);
  }
}
