export const CONTACT_FORM_ADD = 'CONTACT_FORM_ADD';
export const CONTACT_FORM_EDIT = 'CONTACT_FORM_EDIT';
export const CONTACT_FORM_CLOSE = 'CONTACT_FORM_CLOSE';

export const ContactFormType = {
    ADD: 'ADD',
    EDIT: 'EDIT'
};

const initialState = {
    type: '',
    contactId: null
};

const contactFormReducer = (state= initialState, action) => {
    switch (action.type) {
        case CONTACT_FORM_ADD: {
            state.type = ContactFormType.ADD;
            state.contactId = null;
            return {...state};
        }
        case CONTACT_FORM_EDIT: {
            state.type = ContactFormType.EDIT;
            state.contactId = action.payload;
            return {...state};
        }
        case CONTACT_FORM_CLOSE: {
            state.type = '';
            return {...state};
        }
        default:
            return {...state};
    }
}

export  default contactFormReducer;

export function contactFormAdd() {
    return {
        type: CONTACT_FORM_ADD
    }
}

export function contactFormEdit(id) {
    return {
        type: CONTACT_FORM_EDIT,
        payload: id
    }
}

export function contactFormClose() {
    return {
        type: CONTACT_FORM_CLOSE
    }
}
