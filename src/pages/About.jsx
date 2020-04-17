import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return <h1>{t("About-title")}</h1>;
};

export default About;
