import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { loadContactData } from "../actions/contact";

const Contact = ({ loadContactData }) => {
    const { t } = useTranslation();

    useEffect(() => {
        loadContactData();
    }, [loadContactData]);

    return <h1>{t("contactTitle")}</h1>;
};

const mapStateToProps = (state) => ({
    contactData: state.contact,
});

export default connect(mapStateToProps, { loadContactData })(Contact);
