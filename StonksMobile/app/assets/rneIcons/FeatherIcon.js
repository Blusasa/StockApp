import React from "react";
import { Icon } from '@rneui/themed';

const FeatherIcon = ({name, color}) => {
  return (
    <Icon
      name={name}
      size={30}
      type="feather"
      color={color}
    />
  );

};

export default FeatherIcon;