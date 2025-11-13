import config from '@plone/volto/registry';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import View from './View';
import QuoteBlockSidebar from './Data';

const Edit = (props) => {
  const {
    data,
    block,
    onChangeBlock,
    selected,
    disableAddBlockOnEnterKey,
    onSelectBlock,
    onAddBlock,
    disableEnter = false,
  } = props;

  const handleEnterKey = (e, index) => {
    const isMultipleSelection = e.shiftKey;
    if (e.key === 'Enter' && !disableEnter && !isMultipleSelection) {
      if (!disableAddBlockOnEnterKey) {
        onSelectBlock(onAddBlock(config.settings.defaultBlockType, index + 1));
      }
      e.preventDefault();
    }
  };

  return (
    <div
      className="block quote"
      role="presentation"
      onKeyDown={(e) =>
        handleEnterKey(e, props.index, props.id, props.blockNode.current)
      }
    >
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
