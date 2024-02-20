import QuoteBlockSidebar from './Data';
import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import View from './View';
import config from '@plone/volto/registry';

const Edit = (props) => {
  const {
    data,
    block,
    onChangeBlock,
    selected,
    disableAddBlockOnEnterKey,
    onSelectBlock,
    onAddBlock,
    disableEnter = false,
  } = props;

  const handleEnterKey = (e, index) => {
    const isMultipleSelection = e.shiftKey;
    if (e.key === 'Enter' && !disableEnter && !isMultipleSelection) {
      if (!disableAddBlockOnEnterKey) {
        onSelectBlock(onAddBlock(config.settings.defaultBlockType, index + 1));
      }
      e.preventDefault();
    }
  };

  return (
    <div
      className="block quote"
      role="presentation"
      onKeyDown={(e) =>
        handleEnterKey(e, props.index, props.id, props.blockNode.current)
      }
    >
      <View {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <QuoteBlockSidebar
          {...props}
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </div>
  );
};

export default Edit;
