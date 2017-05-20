import React, {Component} from 'react';
import Users from './components/UsersList'
import App from './App'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import Contact from './components/Concact'
import './App.css'

class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <NavLink activeClassName="selected"  to="/home">Home</NavLink>
                        <NavLink activeClassName="selected" to="/contacts">Contacts</NavLink>
                    </nav>
                    <Route path="/home" component={App}></Route>
                    <Route path="/contacts" component={Contact}></Route>
                </div>
            </BrowserRouter>
        );
    }
}


export default Home;
