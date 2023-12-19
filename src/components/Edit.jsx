import React from "react";
import View from "./View";
import { SidebarPortal } from "@plone/volto/components";
import QuoteBlockSidebar from "./Data";

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
