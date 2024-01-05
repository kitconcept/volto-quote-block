import { DetachedTextBlockEditor } from "@plone/volto-slate/blocks/Text/DetachedTextBlockEditor";
import QuoteBlockSidebar from "./Data";
import React from "react";
import { SidebarPortal } from "@plone/volto/components";
import config from "@plone/volto/registry";
import { flattenToAppURL } from "@plone/volto/helpers";

const Edit = (props) => {
  const { data, block, onChangeBlock, selected } = props;

  return (
    <div className="block quote">
      <div className="inner-wrapper">
        {config?.blocks?.blocksConfig?.quote.isImageAllowed &&
          data?.image?.[0] && (
            <div className="image-wrapper">
              <img
                src={`${flattenToAppURL(data?.image[0]["@id"])}/${
                  data?.image[0]?.image_scales.image[0]?.scales?.preview
                    ?.download
                }}`}
                alt=""
                className="image"
                width="150"
                height="150"
                loading="lazy"
              />
            </div>
          )}
        <figure className="quotation">
          <blockquote className="quote-text">
            <DetachedTextBlockEditor {...props} />
          </blockquote>
          <figcaption className="author">
            <span className="person">{data.person}</span>
            {data.position && `, ${data.position}`}
          </figcaption>
        </figure>
      </div>
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
