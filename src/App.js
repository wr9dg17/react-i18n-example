import React, { useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { setLanguage } from "./actions/lang";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import logo from "./logo.svg";

const App = ({ match, setLanguage }) => {
    const { t, i18n } = useTranslation();
    let lang = match.path.replace("/", "");
    
    setLanguage(lang);

    useEffect(() => {
        setLanguage(lang);

        if (lang === "") {
            i18n.changeLanguage("az");
        } else {
            i18n.changeLanguage(lang);
        }
        // eslint-disable-next-line
    }, [i18n, lang]);

    return (
        <div className="App">
            <header className="App-header">
                <ul className="langs">
                    <li>
                        <a href="/">AZ</a>
                    </li>
                    <li>
                        <a href="/ru">RU</a>
                    </li>
                    <li>
                        <a href="/en">EN</a>
                    </li>
                </ul>

                <ul className="menu">
                    <li>
                        <NavLink to={`${match.path}`} exact>
                            {t("menu.home")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${match.path}/about`}>
                            {t("menu.about")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${match.path}/contact`}>
                            {t("menu.contact")}
                        </NavLink>
                    </li>
                </ul>
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <Switch>
                <Route path={`${match.path}/`} component={Home} exact />
                <Route path={`${match.path}/about`} component={About} exact />
                <Route
                    path={`${match.path}/contact`}
                    component={Contact}
                    exact
                />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
};

export default connect(null, { setLanguage })(App);
