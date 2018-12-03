import { Injectable } from '@angular/core';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root',
})
export class FakeUserService {
  constructor() {}

  getUsers(n?: number) {
    let users: any[] = [];
    if (!n) n = 10; // default 10 users

    for (var i = 0; i < n; i++) {
      const user = {
        id: i.toString(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        // avatar: faker.image.avatar(),
        email: faker.internet.email(),
      };

      users.push(user);
    }

    return users;
  }
}
