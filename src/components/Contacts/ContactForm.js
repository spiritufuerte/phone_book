import React, { useRef} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {TextField} from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import {contactFormClose, ContactFormType} from "../../redux/contactFormReducer";
import {contactsAdd, contactsDelete, contactsEdit} from "../../redux/contactsReducer";


const ContactForm = () => {

    const dispatch = useDispatch();
    const inputName = useRef(null);
    const inputSurname = useRef(null);
    const inputPhone = useRef(null);

    const {type, contactId} = useSelector(state => state.contactForm);
    const contact = useSelector(state => state.contacts.contacts[contactId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type === ContactFormType.ADD) {
            dispatch(contactsAdd({
                name: inputName.current.value,
                surname: inputSurname.current.value,
                phone: inputPhone.current.value
            }));
        } else if (type === ContactFormType.EDIT) {
            dispatch( contactsEdit(contactId, {
                name: inputName.current.value,
                surname: inputSurname.current.value,
                phone: inputPhone.current.value
            }))
        }
        handleClose();
    }

    const handleDelete = () => {
        dispatch(contactsDelete(contactId));
        handleClose();
    }

    const handleClose = () => {
        dispatch(contactFormClose());
    }

    return (
        <div>
            <Dialog open={!!type} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form onSubmit={handleSubmit}>
                    <DialogTitle id="form-dialog-title">
                        {type === ContactFormType.EDIT ? 'Edit contact' : 'Add contact'}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {type === ContactFormType.EDIT ? 'To update this contact, please enter correct data about contact.'
                                : 'To add contact to your phonebook, please enter name, surname and phone here.'}
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="name"
                            type="text"
                            color="default"
                            defaultValue={contact?.name}
                            inputRef={inputName}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="surname"
                            label="surname"
                            type="text"
                            defaultValue={contact?.surname}
                            inputRef={inputSurname}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="phone"
                            label="phone"
                            type="text"
                            defaultValue={contact?.phone}
                            inputRef={inputPhone}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        {type === ContactFormType.EDIT &&
                            <Button onClick={handleDelete} color="secondary">
                                Delete
                            </Button>
                        }
                        <Button onClick={handleClose} color="default">
                            Cancel
                        </Button>
                        <Button type="submit" color="default">
                            {type === ContactFormType.EDIT ? 'Update' : 'Add'}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default ContactForm;



