import * as LanguageActions from "../actions/language.action";

const initialState: Object = {
  code: "en",
};

export function languageReducer(state: Object = initialState, action: LanguageActions.Actions) {
  switch (action.type) {
    case LanguageActions.CHANGE_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
}
