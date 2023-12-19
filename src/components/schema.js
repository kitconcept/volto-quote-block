import { defineMessages } from "react-intl";

const messages = defineMessages({
  quoteBlock: {
    id: "Quote",
    defineMessage: "Quote",
  },
  image: {
    id: "Image",
    defineMessage: "Image",
  },
  person: {
    id: "Person",
    defineMessage: "Person",
  },
  position: {
    id: "Position",
    defineMessage: "Position",
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
        fields: ["image", "person", "position"],
      },
    ],
    properties: {
      image: {
        title: props.intl.formatMessage(messages.image),
        widget: "object-browser",
        mode: "image",
      },
      person: {
        title: props.intl.formatMessage(messages.person),
      },
      position: {
        title: props.intl.formatMessage(messages.position),
      },
    },
    required: [],
  };
};
