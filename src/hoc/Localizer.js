import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import { setLanguage } from "../actions/lang";

const Localizer = ({ children, setLanguage }) => {
    const match = useRouteMatch();
    const { i18n } = useTranslation();
    const lang = match.path.replace("/", "");

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

    return children;
};

export default connect(null, { setLanguage })(Localizer);
