import React from 'react';
import { Card as AntdCard, Button, Popover } from 'antd';
import { useTheme } from '../../../ThemeContext';

const Card = ({ name, image, onButtonClick, className = '', onImageClick, subCategories = [], onSubCategoryClick }) => {
  const { color } = useTheme();
  const [popoverOpen, setPopoverOpen] = React.useState(false);

  const handleSubCategoryClick = (sub) => {
    setPopoverOpen(false);
    if (onSubCategoryClick) onSubCategoryClick(sub);
  };

  const popoverContent = (
    <div className="min-w-[160px]">
      {subCategories.length > 0 ? (
        subCategories.map((sub) => (
          <div
            key={sub.name}
            className="cursor-pointer px-2 py-1 hover:bg-gray-100 rounded"
            onClick={() => handleSubCategoryClick(sub)}
          >
            {sub.name}
          </div>
        ))
      ) : (
        <div className="text-gray-400 text-xs">No sub-categories</div>
      )}
    </div>
  );

  return (
    <AntdCard
      hoverable
      cover={
        <img
          alt={name}
          src={image}
          className="h-32 w-full object-cover rounded-t-xl cursor-pointer"
          onClick={onImageClick}
        />
      }
      className={`rounded-xl shadow-md max-w-sm ${className}`}
      bodyStyle={{ padding: 16 }}
    >
      <h3 className="mb-2 font-semibold text-base">{name}</h3>
      <Popover
        content={popoverContent}
        trigger="click"
        open={popoverOpen}
        onOpenChange={setPopoverOpen}
        placement="right"
      >
        <Button
          type="primary"
          className="rounded font-medium text-xs py-0.5 px-2 mt-2 border-0 bg-[var(--theme-color)] hover:bg-[var(--theme-color)]/90"
          style={{ backgroundColor: color, borderColor: color }}
        >
          SUB CATEGORIES
        </Button>
      </Popover>
    </AntdCard>
  );
};

export default Card;