import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { PlayerContainerForm, PlayersContainer } from './styles';

export function Players() {
  return (
    <PlayersContainer>
      <Header showBackButton />

      <Highlight title='Nome da turma' subtitle='adicione a galera e separe os times' />

      <PlayerContainerForm>
        <Input placeholder='Nome da pessoa' autoCorrect={false} />
        <ButtonIcon icon='add' />
      </PlayerContainerForm>

      <Button title='Remover o time' type='SECONDARY' />
    </PlayersContainer>
  );
}
