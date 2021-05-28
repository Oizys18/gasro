import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tranKo from "config/lang/translation.ko.json";
import tranEn from "config/lang/translation.en.json";
import tranCn from "config/lang/translation.cn.json";
import tranVn from "config/lang/translation.vn.json";
export const languages = ["en", "ko", "vn", "cn"] as const;
export type Languages = typeof languages[number]; // 'en' | 'ko' | 'cn' | 'vn

// 다국어옵션, 번역본 전송 시 적용
const resources = {
  en: { translation: tranEn },
  ko: { translation: tranKo },
  vn: { translation: tranVn },
  cn: { translation: tranCn },
};

// const userLanguage = window.navigator.language || window.navigator.userLanguage;
const userLanguage = window.navigator.language;
i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || userLanguage || "ko",
  fallbackLng: "ko",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
