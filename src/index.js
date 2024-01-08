import './theme/main.less';

import QuoteBlockEdit from './components/Edit';
import { QuoteBlockSchema } from './components/schema';
import QuoteBlockView from './components/View';
import quoteSVG from '@plone/volto/icons/quote.svg';

const applyConfig = (config) => {
  config.blocks.blocksConfig.quote = {
    id: 'quote',
    title: 'Quote',
    group: 'text',
    icon: quoteSVG,
    view: QuoteBlockView,
    edit: QuoteBlockEdit,
    blockSchema: QuoteBlockSchema,
    // This has a good reason: Slate does not work in detached mode if enabled
    blockHasOwnFocusManagement: true,
    restricted: false,
    sidebarTab: 1,
    // If this is set to 'true', the sidebar will show an image and alignment fields where you can put an image and align it.
    // If an image is added and later on the image field get's disabled by setting 'showImageField' to 'false',
    // the image and alignment fields aswell as the image won't show any longer.
    showImageField: true,
  };

  return config;
};

export default applyConfig;
