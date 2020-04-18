import React from "react";
import { Switch, Route } from "react-router-dom";

import Localizer from "./hoc/Localizer";
import Layout from "./hoc/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = ({ match }) => {    
    return (
        <div className="App">
            <Localizer>
                <Layout>
                    <Switch>
                        <Route path={`${match.path}/`} exact>
                            <Home />
                        </Route>
                        <Route path={`${match.path}/about`} exact>
                            <About />
                        </Route>
                        <Route path={`${match.path}/contact`} exact>
                            <Contact />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Layout>
            </Localizer>
        </div>
    );
};

export default App;
