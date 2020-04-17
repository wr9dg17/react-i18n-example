import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import layout_az from "../translations/az/layout";
import layout_en from "../translations/en/layout";
import layout_ru from "../translations/ru/layout";

i18n
    .use(initReactI18next)
    .init({
        lng: "az",
        resources: {
            az: {
                translation: {
                    ...layout_az
                }
            },
            en: {
                translation: {
                    ...layout_en
                }
            },
            ru: {
                translation: {
                    ...layout_ru
                }
            }
        }
    });

export default i18n;
