import React from 'react';
import config from '@plone/volto/registry';
import { flattenToAppURL } from '@plone/volto/helpers';
import cx from 'classnames';
import { DetachedTextBlockEditor } from '@plone/volto-slate/blocks/Text/DetachedTextBlockEditor';

const View = (props) => {
  const { data, isEditMode } = props;

  const customSlateSettings = {
    ...props,
    slateSettings: {
      ...config.settings.slate,
      toolbarButtons: config.settings.slate.toolbarButtons.filter(
        (index) => index - config.settings.slate.toolbarButtons,
      ),
    },
  };

  const langMap = {
    EN: {
      startChar: '"',
      endChar: '"',
    },
    DE: {
      startChar: '„',
      endChar: '“',
    },
  };

  return (
    <div className="block quote">
      <div className="inner-wrapper">
        {config.blocks?.blocksConfig?.quote?.showImageField &&
          data.image?.[0] && (
            <div className={cx('image-wrapper', `align-${data.alignment}`)}>
              <img
                src={`${flattenToAppURL(data.image?.[0]?.['@id'])}/${
                  data.image?.[0]?.image_scales?.image[0]?.scales?.preview
                    ?.download
                }}`}
                alt={data.image?.[0]?.title}
                className="image"
                loading="lazy"
              />
            </div>
          )}
        <figure className="quotation">
          {!isEditMode ? (
            <blockquote>
              {langMap[data.language].startChar}
              {data.plaintext}
              {langMap[data.language].endChar}
            </blockquote>
          ) : (
            <blockquote className={cx(data.language)}>
              <DetachedTextBlockEditor {...customSlateSettings} />
            </blockquote>
          )}
          <figcaption className="person">
            <span className="name">{data.name}</span>
            {data.additionalData && `, ${data.additionalData}`}
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default View;
