import { Component, EventEmitter, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent {
  @Output() search = new EventEmitter<string>();
  public debouncer: Subject<string> = new Subject();
  constructor() {
    this.debouncer.pipe(debounceTime(200)).subscribe(val => {
      console.log('searching for: ', val);
      this.search.emit(val);
    });
  }

  debounce(value) {
    this.debouncer.next(value);
  }
}
