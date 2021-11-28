import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import Programs from "./Pages/Programs";
import Artists from "./Pages/Artists";
import AboutUs from "./Pages/AboutUs";
import Impressum from "./Pages/Impressum";
import SupportUs from "./Pages/SupportUs";

export default function Routing() {
  return (
    <Switch>
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/programs" component={Programs} />
      <Route exact path="/programs" to="/festivalpass" component={Programs} />
      <Route exact path="/impressum" component={Impressum} />
      <Route exact path="/supportUs" component={SupportUs} />
      <Route exact path="/artists" to="/embryo" component={Artists} />
      <Route exact path="/artists" to="/persian-empire" component={Artists} />
      <Route exact path="/artists" to="/roya" component={Artists} />
      <Route exact path="/artists" to="/makan" component={Artists} />
      <Route exact path="/artists" to="/payman" component={Artists} />
      <Route exact path="/artists" to="/sam" component={Artists} />
      <Route exact path="/artists" to="/roody" component={Artists} />
      <Route exact path="/" component={Home} />
      <Redirect from="/*" to="/" />
    </Switch>
  );
}
