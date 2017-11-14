import { Action } from '@ngrx/store';
import { createFormGroupState, formGroupReducer, FormGroupState } from 'ngrx-forms';

import { State as RootState } from '../app.reducer';

export interface FormValue {
  firstName: string;
  lastName: string;
  email: string;
  sex: string;
  favoriteColor: string;
  employed: boolean;
  notes: string;
}

export interface State extends RootState {
  asyncValidation: {
    formState: FormGroupState<FormValue>;
  };
}

export const FORM_ID = 'asyncValidation';

export const INITIAL_STATE = createFormGroupState<FormValue>(FORM_ID, {
  firstName: '',
  lastName: '',
  email: '',
  sex: '',
  favoriteColor: '',
  employed: false,
  notes: '',
});

export const reducers = {
  formState(s = INITIAL_STATE, a: Action) {
    return formGroupReducer(s, a);
  },
};
