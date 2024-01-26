import config from '@plone/volto/registry';
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  language: {
    id: 'Language',
    defaultMessage: 'Language',
  },
  quote: {
    id: 'Quote',
    defaultMessage: 'Quote',
  },
  image: {
    id: 'Image',
    defaultMessage: 'Image',
  },
  name: {
    id: 'Name',
    defaultMessage: 'Name',
  },
  additionalData: {
    id: 'Additional data',
    defaultMessage: 'Additional data',
  },
  alignment: {
    id: 'Alignment',
    defineMessage: 'Alignment',
  },
});

export const QuoteBlockSchema = ({ intl }) => {
  const defaultLang = config.blocks?.blocksConfig?.quote?.defaultLang;
  const allowed_languages =
    config.blocks?.blocksConfig?.quote?.allowed_languages;
  const DEFAULT_LANGUAGES = [
    ['EN', 'EN'],
    ['DE', 'DE'],
  ];

  const filterDefaultLanguages = () => {
    if (allowed_languages) {
      return DEFAULT_LANGUAGES.filter((item) =>
        allowed_languages.includes(item[0]),
      );
    } else {
      return DEFAULT_LANGUAGES;
    }
  };

  return {
    title: intl.formatMessage(messages.quote),
    block: 'quote',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: config?.blocks?.blocksConfig?.quote?.showImageField
          ? ['language', 'image', 'alignment']
          : ['language'],
      },
      {
        id: 'person',
        title: 'Person',
        fields: ['name', 'additionalData'],
      },
    ],
    properties: {
      language: {
        title: intl.formatMessage(messages.language),
        choices: filterDefaultLanguages(),
        default: defaultLang,
        noValueOption: false,
      },
      image: {
        title: intl.formatMessage(messages.image),
        widget: 'object_browser',
        mode: 'image',
        allowExternals: true,
        selectedItemAttrs: ['image_field', 'image_scales'],
      },
      name: {
        title: intl.formatMessage(messages.name),
      },
      additionalData: {
        title: intl.formatMessage(messages.additionalData),
      },
      alignment: {
        title: intl.formatMessage(messages.alignment),
        widget: 'align',
        actions: ['left', 'center', 'right'],
        default: 'center',
      },
    },
    required: [],
  };
};
