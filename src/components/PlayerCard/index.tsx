import { ButtonIcon } from '@components/ButtonIcon';

import { PlayerCardContainer, PlayerName, PlayerIcon } from './styles';

type PlayerCardProps = {
  name: string;
  onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <PlayerCardContainer>
      <PlayerIcon name="person" />
      <PlayerName>{name}</PlayerName>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </PlayerCardContainer>
  );
}
