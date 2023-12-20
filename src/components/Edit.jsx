import React from "react";
import { SidebarPortal } from "@plone/volto/components";
import QuoteBlockSidebar from "./Data";
import { DetachedTextBlockEditor } from "@plone/volto-slate/blocks/Text/DetachedTextBlockEditor";

const Edit = (props) => {
  const { data, block, onChangeBlock, selected } = props;

  return (
    <div className="block quote">
      <figure className="quotation">
        <blockquote className="quote-text">
          <DetachedTextBlockEditor {...props} />
        </blockquote>
        <figcaption className="author">
          <span className="person">{data.person}</span>
          {data.position && ", "}
          {data.position}
        </figcaption>
      </figure>
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
