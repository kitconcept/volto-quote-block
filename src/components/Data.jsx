import React from "react";
import { BlockDataForm } from "@plone/volto/components";
import { QuoteBlockSchema } from "./schema";

const QuoteBlockData = (props) => {
  const { data, block, onChangeBlock } = props;
  const schema = QuoteBlockSchema(props);

  return (
    <BlockDataForm
      schema={schema}
      title={data.title}
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      formData={data}
      block={block}
    />
  );
};

export default QuoteBlockData;
