import config from '@plone/volto/registry';
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  quote: {
    id: 'Quote',
    defaultMessage: 'Quote',
  },
  quotationLanguage: {
    id: 'Language',
    defaultMessage: 'Language',
  },
  image: {
    id: 'Image',
    defaultMessage: 'Image',
  },
  author: {
    id: 'Author',
    defaultMessage: 'Author',
  },
  additional_information: {
    id: 'Additional information',
    defaultMessage: 'Additional information',
  },
  cite: {
    id: 'Cite',
    defaultMessage: 'Cite',
  },
  description: {
    id: 'This field expects an URL as input (optional). If an URL is provided the additional information will have a relation to this URL, this is due to accessibility norms.',
    defaultMessage:
      'This field expects an URL as input (optional). If an URL is provided the additional information will have a relation to this URL, this is due to accessibility norms.',
  },
});

export const QuoteBlockSchema = ({ intl }) => {
  const defaultLang = config.blocks?.blocksConfig?.quote?.defaultLang;
  const allowedLanguages = config.blocks?.blocksConfig?.quote?.allowedLanguages;
  const DEFAULT_LANGUAGES = [
    ['en', 'en'],
    ['de', 'de'],
  ];

  const filterDefaultLanguages = () => {
    if (allowedLanguages) {
      return DEFAULT_LANGUAGES.filter((item) =>
        allowedLanguages.includes(item[0]),
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
          ? ['image']
          : [],
      },
      {
        id: 'author',
        title: 'Author',
        fields: ['author', 'additional_information'],
      },
      {
        id: 'accessibility',
        title: 'Accessibility',
        fields: ['quotationLanguage', 'cite'],
      },
    ],
    properties: {
      quotationLanguage: {
        title: intl.formatMessage(messages.quotationLanguage),
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
      author: {
        title: intl.formatMessage(messages.author),
      },
      additional_information: {
        title: intl.formatMessage(messages.additional_information),
      },
      cite: {
        title: intl.formatMessage(messages.cite),
        widget: 'url',
        description: intl.formatMessage(messages.description),
      },
    },
    required: [],
  };
};
