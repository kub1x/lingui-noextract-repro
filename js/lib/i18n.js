import * as Localization from 'expo-localization';
import { i18n } from '@lingui/core';

//import { cs, en, pl, de } from 'make-plural/plurals';
//i18n.loadLocaleData('cs', { plurals: cs });
//i18n.loadLocaleData('en', { plurals: en });
//i18n.loadLocaleData('pl', { plurals: pl });
//i18n.loadLocaleData('de', { plurals: de });

import 'moment/locale/cs';
import 'moment/locale/pl';
import 'moment/locale/de';

export const LOCALES = {
  cs: 'Česky',
  en: 'English',
  pl: 'Polski',
  de: 'Deutsch',
};

//import { messages as cs } from '../../assets/locales/cs/messages';
//import { messages as en } from '../../assets/locales/en/messages';
//import { messages as pl } from '../../assets/locales/pl/messages';
//import { messages as de } from '../../assets/locales/de/messages';
//i18n.load({ cs, en, pl, de });

i18n.load({
  cs: require('../../assets/locales/cs/messages').messages,
  en: require('../../assets/locales/en/messages').messages,
  pl: require('../../assets/locales/pl/messages').messages,
  de: require('../../assets/locales/de/messages').messages,
});

const locale = Localization.locale.substr(0, 2);
i18n.activate(locale);