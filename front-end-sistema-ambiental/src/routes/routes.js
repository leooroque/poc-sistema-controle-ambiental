import { BrowserRouter, Route,Redirect } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Bemvindo from '../pages/Bemvindo';
import { reactLocalStorage } from 'reactjs-localstorage';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path='/' exact  component={Bemvindo}/>
            <Route path='/login' exact  component={Login}/>
            
            <Route path='/principal' component={Main}/>
        </BrowserRouter>
    )
}