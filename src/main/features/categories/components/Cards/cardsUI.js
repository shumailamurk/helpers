import React from 'react';
import { Card as AntdCard, Button, Popover, Dropdown, Menu } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

const CardUI = ({
  name,
  image,
  className = '',
  onImageClick,
  subCategories = [],
  popoverOpen,
  onPopoverOpenChange,
  onSubCategoryClick,
  onMenuAction,
  onSubCategoriesButtonClick,
  color
}) => {
  const popoverContent = (
    <div className="min-w-[160px]">
      {subCategories.length > 0 ? (
        subCategories.map((sub) => (
          <div
            key={sub.name}
            className="cursor-pointer px-2 py-1 hover:bg-gray-100 rounded"
            onClick={() => onSubCategoryClick && onSubCategoryClick(sub)}
          >
            {sub.name}
          </div>
        ))
      ) : (
        <div className="text-gray-400 text-xs">No sub-categories</div>
      )}
    </div>
  );

  const menu = (
    <Menu onClick={({ key }) => onMenuAction && onMenuAction(key)}>
      <Menu.Item key="add">Add Sub Category</Menu.Item>
      <Menu.Item key="update">Update Category</Menu.Item>
    </Menu>
  );

  return (
    <div className={`w-60 max-w-full ${className}`}>
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
        className="shadow-md rounded-2xl"
        bodyStyle={{ padding: 16, position: 'relative' }}
      >
        <div className="flex justify-between items-end mb-2">
          <h3 className="font-semibold text-base text-left w-full">{name}</h3>
          <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
            <Button 
              type="text" 
              icon={<EllipsisOutlined />} 
              className="self-end mt-0 mb-0.5"
            />
          </Dropdown>
        </div>
        <div className="flex flex-col items-start w-full">
          <Popover
            content={popoverContent}
            trigger="click"
            open={popoverOpen}
            onOpenChange={onPopoverOpenChange}
            placement="right"
          >
            <Button
              type="primary"
              size="small"
              className="rounded-lg font-medium text-xs px-2 py-0.5 h-6 leading-tight mt-2 border-0 mx-0"
              style={{ backgroundColor: color, borderColor: color }}
              onClick={onSubCategoriesButtonClick}
            >
              SUB CATEGORIES
            </Button>
          </Popover>
        </div>
      </AntdCard>
    </div>
  );
};

export default CardUI; 