import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import AboutUs from './Pages/AboutUs'
import Home from './Pages/Home'
import Programs from './Pages/Programs'
import Artists from './Pages/Artists'

export default function Routing() {
    return (
        <Switch>
            <Route path="/" exact  component={Home}/>
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/programs" component={Programs} />
            <Route path="/artists" component={Artists} />
        </Switch>
    )
}