import {combineReducers, createStore} from "redux";
import contactsReducer from "./contactsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import contactFormReducer from "./contactFormReducer";
import contactsSearchReducer from "./contactsSearchReducer";

const reducer = combineReducers({
    contacts: contactsReducer,
    contactForm: contactFormReducer,
    contactsSearch: contactsSearchReducer
});

const store = createStore(reducer, composeWithDevTools());

export default store;