import { Icon } from '@rneui/themed';
import { useTheme } from "../../theme";

type prop = {
  isPositive?: boolean,
  size: number
}

const ArrowIcon = ({isPositive = false, size}: prop) => {

    const theme = useTheme();

    return(
      <Icon 
        name={isPositive ? "arrow-up-right" : "arrow-down-left"}
        color={isPositive ? theme.colors.deltaPositive : theme.colors.deltaNegative}
        size={size}
        type='feather'
      />
    );
};

export default ArrowIcon;