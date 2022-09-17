import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { NewGroupContainer, NewGroupContent, NewGroupIcon } from './styles';

export function NewGroup() {
  return (
    <NewGroupContainer>
      <Header showBackButton />
      <NewGroupContent>
        <NewGroupIcon />

        <Highlight
          title='Nova turma'
          subtitle='crie a turma para adicionar pessoas'
        />

        <Button title='Criar' />
      </NewGroupContent>
    </NewGroupContainer>
  );
}
