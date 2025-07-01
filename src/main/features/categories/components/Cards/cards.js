import React from 'react';
import CardUI from './cardsUI';
import { useTheme } from '../../../../../ThemeContext';

const Card = ({
  name,
  image,
  className = '',
  onImageClick,
  subCategories = [],
  onSubCategoryClick,
  onMenuAction,
}) => {
  const { color } = useTheme();
  const [popoverOpen, setPopoverOpen] = React.useState(false);

  const handleSubCategoryClick = (sub) => {
    setPopoverOpen(false);
    if (onSubCategoryClick) onSubCategoryClick(sub);
  };

  const handlePopoverOpenChange = (open) => {
    setPopoverOpen(open);
  };

  return (
    <CardUI
      name={name}
      image={image}
      className={className}
      onImageClick={onImageClick}
      subCategories={subCategories}
      popoverOpen={popoverOpen}
      onPopoverOpenChange={handlePopoverOpenChange}
      onSubCategoryClick={handleSubCategoryClick}
      onMenuAction={onMenuAction}
      color={color}
    />
  );
};

export default Card; 