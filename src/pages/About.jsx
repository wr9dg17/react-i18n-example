import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { loadAboutData } from "../actions/about";

const About = ({ loadAboutData }) => {
    const { t } = useTranslation();

    useEffect(() => {
        loadAboutData();
    }, [loadAboutData]);

    return <h1>{t("aboutTitle")}</h1>;
};

const mapStateToProps = (state) => ({
    aboutData: state.about,
});

export default connect(mapStateToProps, { loadAboutData })(About);
