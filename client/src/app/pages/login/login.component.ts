import { Component } from '@angular/core';
import { setLogin } from '../../store/actions/login.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private store: Store) {
  }

  onSubmit(username: string, password: string) {
    this.store.dispatch(setLogin({ username, password }));
  }
}
