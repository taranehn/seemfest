import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Home from './pages/Home';
import Programs from './pages/Programs';
import Artists from './pages/Artists';
import AboutUs from './pages/AboutUs';

export default function Routing() {
    return (
        <Switch>
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/programs" component={Programs} />
            <Route exact path="/artists" to="/embryo" component={Artists} />
            <Route exact path="/artists" to="/persian" component={Artists} />
            <Route exact path="/" component={Home} />
            <Redirect from="/*" to="/" />
        </Switch>
    )
}