export const CONTACTS_ADD = 'CONTACTS_ADD';
export const CONTACTS_EDIT = 'CONTACTS_EDIT';
export const CONTACTS_DELETE = 'CONTACTS_DELETE';

const initialState = {
    contacts: [
        {name: 'Pavlo', surname: 'Petrov', phone: '063-0232-23-22'},
        {name: 'Petro', surname: 'Patdsrov', phone: '063-2242-23-22'},
        {name: 'Davdsa', surname: 'Petrdd', phone: '063-0231-23-22'},
        {name: 'Zavfd', surname: 'Petd', phone: '063-0235-23-22'}
    ]
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACTS_ADD: {
            const {contact} = action.payload;
            state.contacts.push(contact);
            return {...state};
        }
        case CONTACTS_EDIT: {
            const {id, contact} = action.payload;
            state.contacts[id] = contact;
            return {...state};
        }
        case CONTACTS_DELETE: {
            const {id} = action.payload;
            state.contacts.splice(id, 1);
            return {...state};
        }
        default:
            return {...state};
    }
}

export  default contactsReducer;

export function contactsAdd(contact) {
    return {
        type: CONTACTS_ADD,
        payload: {contact}
    }
}

export function contactsEdit(id, contact) {
    return {
        type: CONTACTS_EDIT,
        payload: {id, contact}
    }
}

export function contactsDelete(id) {
    return {
        type: CONTACTS_DELETE,
        payload: {id}
    }
}