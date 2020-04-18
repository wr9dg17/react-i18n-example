import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { loadHomeData } from "../actions/home";

const Home = ({ loadHomeData }) => {
    const { t } = useTranslation();

    useEffect(() => {
        loadHomeData();
    }, [loadHomeData]);

    return <h1>{t("homeTitle")}</h1>;
};

const mapStateToProps = (state) => ({
    homeData: state.home,
});

export default connect(mapStateToProps, { loadHomeData })(Home);
