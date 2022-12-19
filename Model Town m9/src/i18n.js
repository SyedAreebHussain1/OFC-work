// import React from 'react';
// import I18n from 'i18next'

// // Import all locales
// import en from 'translations/en.json';
// import ur from 'translations/ur.json';

// // Should the app fallback to English if user locale doesn't exists
// I18n.fallbacks = true;

// // Define the supported translations
// I18n.translations = {
//   en,
//   ur
// };

// const currentLocale = I18n.currentLocale();

// // Is it a RTL language?
// export const isRTL = currentLocale.indexOf('ur') === 0 || currentLocale.indexOf('en') === 0;

// // Allow RTL alignment in RTL languages
// React.I18nManager.allowRTL(isRTL);

// // The method we'll use instead of a regular string
// export function strings(name, params = {}) {
//   return I18n.t(name, params);
// };

// export default I18n;