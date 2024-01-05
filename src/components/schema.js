import config from "@plone/volto/registry";
import { defineMessages } from "react-intl";

const messages = defineMessages({
  quoteBlock: {
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
  position: {
    id: "Position",
    defaultMessage: "Position",
  },
});

export const QuoteBlockSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.quoteBlock),
    block: "quote",
    fieldsets: [
      {
        id: "default",
        title: "Default",
        fields: config.blocks?.blocksConfig?.quote.isImageAllowed
          ? ["image"]
          : [],
      },
      {
        id: "person",
        title: "Person",
        fields: ["person", "position"],
      },
    ],
    properties: {
      image: {
        title: props.intl.formatMessage(messages.image),
        widget: "object_browser",
        mode: "image",
        allowExternals: true,
        selectedItemAttrs: ["image_field", "image_scales"],
      },
      person: {
        title: props.intl.formatMessage(messages.name),
      },
      position: {
        title: props.intl.formatMessage(messages.position),
      },
    },
    required: [],
  };
};
