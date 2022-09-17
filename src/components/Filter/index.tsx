import { TouchableOpacityProps } from 'react-native';

import { FilterContainer, FilterText, FilterStyleProps } from './styles';

type FilterProps = TouchableOpacityProps & FilterStyleProps & {
  title: string;
}

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <FilterContainer isActive={isActive} {...rest}>
      <FilterText>{title}</FilterText>
    </FilterContainer>
  );
}
