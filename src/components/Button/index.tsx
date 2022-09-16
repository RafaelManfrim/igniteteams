import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer, ButtonTitle, ButtonTypeStyleProps } from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <ButtonContainer type={type} {...rest}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
}
