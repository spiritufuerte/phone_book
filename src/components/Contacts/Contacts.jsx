import React from 'react';
import Contact from "./Contact/Contact";
import {useDispatch, useSelector} from "react-redux";
import classes from './Contacts.module.scss';
import ContactForm from "./ContactForm";
import Button from "@material-ui/core/Button";
import {contactFormAdd, contactFormEdit} from "../../redux/contactFormReducer";
import Search from "./SearchComponent/Search";

const Contacts = () => {

    const dispatch = useDispatch();
    const {contacts} = useSelector(state => state.contacts);
    const {searchText} = useSelector(state => state.contactsSearch);

    const handleContactAdd = () => {
        dispatch(contactFormAdd());
    }

    const handleContactEdit = (id) => {
        dispatch(contactFormEdit(id));
    }

    const filterContacts = (contact) => {
        return contact.name.toLowerCase().indexOf(searchText.toLowerCase()) === 0
            || contact.surname.toLowerCase().indexOf(searchText.toLowerCase()) === 0;
    }

    return (
        <div>
            <Search/>
            <Button
                className={classes.button}
                variant="contained"
                color="default"
                size="large"
                onClick={handleContactAdd}
            >
                Add contact
            </Button>
            <ContactForm/>
            <div className={classes.contacts}>
                <h1>Your contacts:</h1>
                {contacts.filter(filterContacts).map((item, i) => (
                    <div onClick={() => handleContactEdit(i)} key={i}>
                        <Contact
                            name={item.name}
                            surname={item.surname}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Contacts;
