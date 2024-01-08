import React from "react";
import config from "@plone/volto/registry";
import { flattenToAppURL } from "@plone/volto/helpers";
import cx from "classnames";

const View = (props) => {
  const { data } = props;

  return (
    <div className="block quote">
      <div className="inner-wrapper">
        {config?.blocks?.blocksConfig?.quote.showImageField &&
          data?.image?.[0] && (
            <div className={cx("image-wrapper", `align-${data.alignment}`)}>
              <img
                src={`${flattenToAppURL(data?.image[0]["@id"])}/${
                  data?.image[0]?.image_scales?.image[0]?.scales?.preview
                    ?.download
                }}`}
                alt={data.image[0].title}
                className="image"
                loading="lazy"
              />
            </div>
          )}
        <figure className="quotation">
          <blockquote className="quote-text">{data.quote}</blockquote>
          <figcaption className="author">
            <span className="person">{data.person}</span>
            {data.additionalData && `, ${data.additionalData}`}
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default View;
