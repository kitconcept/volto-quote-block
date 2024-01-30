import React from 'react';
import config from '@plone/volto/registry';
import { flattenToAppURL } from '@plone/volto/helpers';
import cx from 'classnames';
import { DetachedTextBlockEditor } from '@plone/volto-slate/blocks/Text/DetachedTextBlockEditor';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';

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

  return (
    <div className="block quote">
      <div className="inner-wrapper">
        {config.blocks?.blocksConfig?.quote?.showImageField &&
          data.image?.[0] && (
            <div className="image-wrapper">
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
        <blockquote
          cite={data.cite}
          className={cx(data.language, isEditMode && 'edit')}
        >
          {!isEditMode ? (
            <TextBlockView {...props} />
          ) : (
            <DetachedTextBlockEditor {...customSlateSettings} />
          )}
          <footer>
            {data.name}
            {data.additional_information && data.cite ? (
              <cite>{`, ${data.additional_information}`}</cite>
            ) : (
              data.additional_information && (
                <span>{`, ${data.additional_information}`}</span>
              )
            )}
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default View;
