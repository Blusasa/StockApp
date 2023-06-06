import React from "react";
import { Icon } from '@rneui/themed';

const FeatherIcon = ({name, color, size}) => {
  return (
    <Icon
      name={name}
      size={size}
      type="feather"
      color={color}
    />
  );

};

export default FeatherIcon;