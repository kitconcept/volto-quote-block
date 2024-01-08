import QuoteBlockSidebar from './Data';
import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import View from './View';

const Edit = (props) => {
  const { data, block, onChangeBlock, selected } = props;

  return (
    <div className="block quote">
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
