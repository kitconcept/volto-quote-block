import React from "react";
import cx from "classnames";
import { TextBlockView } from "@plone/volto-slate/blocks/Text";

const View = (props) => {
  const { data } = props;
  return (
    <div className={cx("block quote")}>
      <div className="inner-wrapper">
        {data?.image?.[0] && (
          <div className="quote-image-wrapper">
            <img
              src={`${flattenToAppURL(
                data.image[0]["@id"]
              )}/@@images/image/preview`}
              alt=""
              width="150"
              height="150"
              loading="lazy"
              className="quote-image"
            />
          </div>
        )}
        <figure className="quotation">
          <blockquote className="quote-text">
            <TextBlockView {...props} />
          </blockquote>
          <figcaption className="author">
            <span className="person">{data.person}</span>
            {data.position && ", "}
            {data.position}
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default View;
