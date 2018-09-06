import { i18n } from './i18n';

describe('i18n util helper', () => {
  beforeAll(() => {
    i18n.internationalization = {
      setTranslations: jest.fn(),
      t: jest.fn(),
      setLocale: jest.fn(),
    };
  });

  describe('setTranslations', () => {
    beforeEach(() => {
      i18n.setTranslations({
        en: {
          key: 'some key translated value',
        },
      });
    });

    it('should call setTranslation from internationalization lib and load keys to be available', () => {
      expect(i18n.internationalization.setTranslations).toHaveBeenCalled();
    });
  });

  describe('setLocale', () => {
    it('should call setLocale from internationalization lib to set current Localization', () => {
      i18n.setLocale('en');
      expect(i18n.internationalization.setLocale).toHaveBeenCalled();
    });

    describe('no language available', () => {
      it('should call setLocale with defaultLocale "en"', () => {
        i18n.setLocale('ru');
        expect(i18n.internationalization.setLocale).toHaveBeenCalledWith('en');
      });
    });
  });

  describe('translate', () => {
    it('should call t helper from internationalization lib translate the key', () => {
      i18n.translate('key');
      expect(i18n.internationalization.t).toHaveBeenCalledWith('key');
    });

    it('should call t helper with options from internationalization lib translate the key', () => {
      i18n.translate('key', {});
      expect(i18n.internationalization.t).toHaveBeenCalledWith('key', {});
    });
  });
});
