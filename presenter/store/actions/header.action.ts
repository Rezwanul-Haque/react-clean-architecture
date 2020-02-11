import { Action } from '@ngrx/store';

export const CHANGE_TITLE = '[CHANGE] title';

export class ChangeTitle implements Action {
  readonly type = CHANGE_TITLE;

  constructor(public payload: any) {

  }
}

export type Actions = ChangeTitle;
