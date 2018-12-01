import { Component, OnInit } from '@angular/core';
import { FakeUserService } from './fake-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public users;
  constructor(private fakeUserService: FakeUserService) {}

  ngOnInit() {
    this.users = this.fakeUserService.getUsers(25);
  }
}
