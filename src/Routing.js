import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import Programs from './pages/Programs'
import Artists from './pages/Artists'

export default function Routing() {
    return (
        <Switch>
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/programs" component={Programs} />
            <Route exact path="/artists" component={Artists} />
            <Route exact path="/" component={Home} />
            <Redirect from="/*" to="/" />
        </Switch>
    )
}