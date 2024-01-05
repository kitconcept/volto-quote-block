import React from "react";
import { TextBlockView } from "@plone/volto-slate/blocks/Text";
import config from "@plone/volto/registry";
import { flattenToAppURL } from "@plone/volto/helpers";

const View = (props) => {
  const { data } = props;

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
                alt={data.image[0].title}
                className="image"
                loading="lazy"
              />
            </div>
          )}
        <figure className="quotation">
          <blockquote className="quote-text">
            <TextBlockView {...props} />
          </blockquote>
          <figcaption className="author">
            <span className="person">{data.person}</span>
            {data.position && `, ${data.position}`}
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default View;
