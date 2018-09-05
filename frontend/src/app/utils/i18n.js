import { I18n } from 'react-i18nify-lite';
import languages from '../lang';

class Translation {
  internationalization = I18n;

  defaultLocale = 'en';

  constructor() {
    this.internationalization.setTranslations(languages);
    this.internationalization.setLocale(this.defaultLocale);
  }

  translate = (key, options) => (options)
    ? this.internationalization.t(key, options) : this.internationalization.t(key);

  setLocale = lang => languages[lang]
    && this.internationalization.setLocale(lang) || this.internationalization.setLocale(this.defaultLocale); // eslint-disable-line
}

export const i18n = new Translation();
