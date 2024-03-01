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
  citeDescription: {
    id: 'Enter the URL from where the quote originates here. This field is not exposed, it is only used by accessibility tools to provide a better experience.',
    defaultMessage:
      'Enter the URL from where the quote originates here. This field is not exposed, it is only used by accessibility tools to provide a better experience.',
  },
  description: {
    id: 'This field is not exposed, it is only used by accessibility tools to provide a better experience.',
    defaultMessage:
      'This field is not exposed, it is only used by accessibility tools to provide a better experience.',
  },
  accessibility: {
    id: 'accessibility',
    defaultMessage: 'Accessibility',
  },
});

export const QuoteBlockSchema = ({ intl }) => {
  return {
    title: intl.formatMessage(messages.quote),
    block: 'quote',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: config?.blocks?.blocksConfig?.quote?.showImageField && [
          'image',
        ],
      },
      {
        id: 'author',
        title: intl.formatMessage(messages.author),
        fields: ['author', 'additional_information'],
      },
      {
        id: 'accessibility',
        title: intl.formatMessage(messages.accessibility),
        fields: ['quotationLanguage', 'cite'],
      },
    ],
    properties: {
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
      quotationLanguage: {
        title: intl.formatMessage(messages.quotationLanguage),
        vocabulary: {
          '@id': 'plone.app.vocabularies.SupportedContentLanguages',
        },
        description: intl.formatMessage(messages.description),
      },
      cite: {
        title: intl.formatMessage(messages.cite),
        widget: 'url',
        description: intl.formatMessage(messages.citeDescription),
      },
    },
    required: [],
  };
};
