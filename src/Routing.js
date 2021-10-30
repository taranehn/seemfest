import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import AboutUs from './AboutUs'
import Home from './Home'
import Programs from './Programs'

export default function Routing() {
    return (
        <Switch>
            <Route path="/" exact  component={Home}/>
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/programs" component={Programs} />
        </Switch>
    )
}