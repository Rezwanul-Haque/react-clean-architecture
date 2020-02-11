import { Action } from '@ngrx/store';

export const CHANGE_LANGUAGE = '[CHANGE] language';

export class ChangeLanguage implements Action {
  readonly type = CHANGE_LANGUAGE;

  constructor(public payload: any) {

  }
}

export type Actions = ChangeLanguage;
