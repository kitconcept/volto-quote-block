import { BlockDataForm } from '@plone/volto/components';
import { QuoteBlockSchema } from './schema';
import React from 'react';

const QuoteBlockData = (props) => {
  const { data, block, onChangeBlock, contentType, navRoot } = props;
  const schema = QuoteBlockSchema(props);

  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      formData={data}
      block={block}
      navRoot={navRoot}
      contentType={contentType}
    />
  );
};

export default QuoteBlockData;
