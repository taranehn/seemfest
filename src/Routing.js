import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import AboutUs from './Pages/AboutUs'
import Home from './Pages/Home'
import Programs from './Pages/Programs'
import Artists from './Pages/Artists'

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