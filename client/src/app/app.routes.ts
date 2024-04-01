import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { provideState } from '@ngrx/store';
import { loginFeatureKey, loginReducer } from './store/reducers/login.reducers';

export const routes: Routes = [
	{
		path: "",
		component: LoginComponent,
		providers: [
			provideState({ name: loginFeatureKey, reducer: loginReducer })
		]
	}
];
