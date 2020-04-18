import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../logo.svg";

const Header = () => {
    const match = useRouteMatch();
    const { t } = useTranslation();

    return (
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
    );
};

export default Header;
