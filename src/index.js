import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./services/i18n";

import App from "./App";
import "./App.css";

const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path={["/en", "/ru", ""]} component={App} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);
