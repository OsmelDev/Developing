import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"
import navbarTranslation_en from "./translations/en/navbarTranslation.json"
import navbarTranslation_es from "./translations/es/navbarTranslation.json"
import sidebarTranslation_en from "./translations/en/sidebarTranslation.json"
import sidebarTranslation_es from "./translations/es/sidebarTranslation.json"


i18next.init({
  interpolation: { escapeValue: false },
  lng:"en",
  resources:{
    es:{
      global:global_es,
      navbarTranslation: navbarTranslation_es,
      sidebarTranslation: sidebarTranslation_es
    },
    en:{
      global:global_en,
      navbarTranslation: navbarTranslation_en,
      sidebarTranslation: sidebarTranslation_en
    },
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);
