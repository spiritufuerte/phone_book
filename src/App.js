import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/home'
                       render={() => <Home/>}/>
                <Route path='/contacts'
                       render={() => <div> dasad</div>}/>
                <Route path='/about'
                       render={() => <div>adas</div>}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
