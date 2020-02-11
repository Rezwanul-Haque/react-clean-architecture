import * as HeaderActions from "../actions/header.action";

const initialState: Object = {
  title: "APP.HOME",
};

export function headerReducer(state: Object = initialState, action: HeaderActions.Actions) {
  switch (action.type) {
    case HeaderActions.CHANGE_TITLE:
      return action.payload;
    default:
      return state;
  }
}
