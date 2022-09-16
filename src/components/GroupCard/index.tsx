import { TouchableOpacityProps } from 'react-native';

import { GroupCardContainer, GroupCardTitle, GroupCardIcon } from './styles';

type GroupCardProps = TouchableOpacityProps & {
  title: string;
}

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <GroupCardContainer {...rest}>
      <GroupCardIcon />
      <GroupCardTitle>{title}</GroupCardTitle>
    </GroupCardContainer>
  );
}
