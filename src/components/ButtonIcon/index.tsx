import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons"

import { ButtonIconContainer, Icon, ButtonIconTypeStyleProps } from './styles';

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: ButtonIconProps) {
  return (
    <ButtonIconContainer {...rest}>
      <Icon name={icon} type={type} />
    </ButtonIconContainer>
  );
}
