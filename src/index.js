import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./services/i18n";

import App from "./App";
import "./App.css";

ReactDOM.render(
    <Suspense fallback="Loading...">
        <Router>
            <Switch>
                <Route path={["/en", "/ru", ""]} component={App} />
            </Switch>
        </Router>
    </Suspense>,
    document.getElementById("root")
);
