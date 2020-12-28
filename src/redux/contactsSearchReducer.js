export const CONTACTS_SEARCH_SEARCH = 'CONTACTS_SEARCH_SEARCH';

const initialState = {
    searchText: ''
};

const contactsSearchReducer = (state= initialState, action) => {
    switch (action.type) {
        case CONTACTS_SEARCH_SEARCH: {
            state.searchText = action.payload;
            return {...state};
        }
        default:
            return {...state};
    }
}

export  default contactsSearchReducer;

export function contactsSearchSearch(searchText) {
    return {
        type: CONTACTS_SEARCH_SEARCH,
        payload: searchText
    }
}
