import { WebNavBar } from "components/Navbars/WebNavBar";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from 'views/About/about'
import AboutCompany from 'views/About Company/about_company'
export default function English() {
    return (
        <>
            <WebNavBar />
            <main>
              
                <Switch>
                    <Route path="/en/about" exact component={Login} />
                    <Route path="/en/register" exact component={Register} />
                    <Redirect from="/auth" to="/auth/login" />
                </Switch>
            </main>
        </>
    );
}