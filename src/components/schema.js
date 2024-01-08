import config from "@plone/volto/registry";
import { defineMessages } from "react-intl";

const messages = defineMessages({
  quote: {
    id: "Quote",
    defaultMessage: "Quote",
  },
  image: {
    id: "Image",
    defaultMessage: "Image",
  },
  name: {
    id: "Name",
    defaultMessage: "Name",
  },
  additionalData: {
    id: "Additional data",
    defaultMessage: "Additional data",
  },
  alignment: {
    id: "Alignment",
    defineMessage: "Alignment",
  },
});

export const QuoteBlockSchema = ({ intl }) => {
  return {
    title: intl.formatMessage(messages.quote),
    block: "quote",
    fieldsets: [
      {
        id: "default",
        title: "Default",
        fields: config?.blocks?.blocksConfig?.quote.showImageField
          ? ["quote", "image", "alignment"]
          : ["quote"],
      },
      {
        id: "person",
        title: "Person",
        fields: ["person", "additionalData"],
      },
    ],
    properties: {
      quote: {
        title: intl.formatMessage(messages.quote),
        widget: "textarea",
      },
      image: {
        title: intl.formatMessage(messages.image),
        widget: "object_browser",
        mode: "image",
        allowExternals: true,
        selectedItemAttrs: ["image_field", "image_scales"],
      },
      person: {
        title: intl.formatMessage(messages.name),
      },
      additionalData: {
        title: intl.formatMessage(messages.additionalData),
      },
      alignment: {
        title: intl.formatMessage(messages.alignment),
        widget: "align",
        actions: ["left", "center", "right"],
        default: "center",
      },
    },
    required: [],
  };
};
