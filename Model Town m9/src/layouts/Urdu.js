import { WebNavBar } from "components/Navbars/WebNavBar";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from 'views/About/about'
import AboutCompany from 'views/About Company/about_company'
import { UrduNavBar } from "components/Navbars/WebNavBar_Urdu";
export default function Urdu() {
    return (
        <>
           <UrduNavBar/>
            <main>
              
                <Switch>
                    <Route path="/ur/about" exact component={About} />
                    <Route path="/ur/company" exact component={AboutCompany} />
                    {/* <Route path="/ur" exact component={UrduLanding} /> */}
                    {/* <Redirect from="/auth" to="/auth/login" /> */}
                </Switch>
            </main>
        </>
    );
}