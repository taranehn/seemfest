import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import AboutUs from './AboutUs'
import Content from './Content'
import Programs from './Programs'

export default function Routing() {
    return (
        <Switch>
            <Route path="/" exact  component={Content}/>
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/programs" component={Programs} />
        </Switch>
    )
}