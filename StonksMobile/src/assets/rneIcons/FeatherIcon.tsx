import { Icon } from '@rneui/themed';

type prop = {
  name: string, 
  color: string,
  size: number
}

const FeatherIcon = ({name, color, size}: prop) => {
    return(
      <Icon 
        name={name}
        color={color}
        size={size}
        type='feather'
      />
    );
};

export default FeatherIcon;