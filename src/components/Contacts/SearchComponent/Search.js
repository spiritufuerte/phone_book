import React from 'react';
import {useDispatch} from "react-redux";
import {contactsSearchSearch} from "../../../redux/contactsSearchReducer";
import classes from "./Search.module.scss";

const Search = () => {

    const dispatch = useDispatch();

    const handlerSearch = (e) => {
        dispatch(contactsSearchSearch(e.target.value));
    }

    return (
        <form className={classes.form}>
            <div className={classes.input_wrapper}>
            <input type="text" placeholder="Search contact" onKeyUp={handlerSearch}/>
            </div>
        </form>
    )
}

export default Search;