import QuoteBlockView from "./components/View";
import QuoteBlockEdit from "./components/Edit";
import { QuoteBlockSchema } from "./components/schema";

import quoteSVG from "@plone/volto/icons/quote.svg";

import "./theme/main.less";

const applyConfig = (config) => {
  config.blocks.blocksConfig.quote = {
    id: "quote",
    title: "Quote",
    group: "text",
    icon: quoteSVG,
    view: QuoteBlockView,
    edit: QuoteBlockEdit,
    blockSchema: QuoteBlockSchema,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  };

  return config;
};

export default applyConfig;
