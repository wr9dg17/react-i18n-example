import React, { useEffect } from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import logo from "./logo.svg";

const App = ({ match }) => {
    const { t, i18n } = useTranslation();
    const lang = match.path.replace("/", "");
    
    useEffect(() => {
        if (lang === "") {
            i18n.changeLanguage("az");
            localStorage.setItem("lang", "az");
        } else {
            i18n.changeLanguage(lang);
            localStorage.setItem("lang", lang);
        }
    }, [i18n, lang]);

    return (
        <div className="App">
            <header className="App-header">
                <ul className="langs">
                    <li>
                        <Link to="/">AZ</Link>
                    </li>
                    <li>
                        <Link to="/ru">RU</Link>
                    </li>
                    <li>
                        <Link to="/en">EN</Link>
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

export default App;
