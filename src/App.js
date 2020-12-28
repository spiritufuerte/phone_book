import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Switch, BrowserRouter, Redirect} from "react-router-dom";
import Home from "./components/Home/Home";
import Contacts from "./components/Contacts/Contacts";
import { StylesProvider } from '@material-ui/core/styles';
import About from "./components/About/About";

const App = () => {
    return (
        <StylesProvider injectFirst>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route exact path='/home'
                           render={() => <Home/>}/>
                    <Route path='/contacts'
                           render={() => <Contacts/>}/>
                    <Route path='/about'
                           render={() => <About/>}/>
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    );
}

export default App;
