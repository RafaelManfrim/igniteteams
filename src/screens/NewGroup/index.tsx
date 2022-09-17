import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';

import { NewGroupContainer, NewGroupContent, NewGroupIcon } from './styles';

export function NewGroup() {
  const navigation = useNavigation()

  function handleCreateGroup() {
    navigation.navigate('players', { group: '' })
  }

  return (
    <NewGroupContainer>
      <Header showBackButton />
      <NewGroupContent>
        <NewGroupIcon />

        <Highlight
          title='Nova turma'
          subtitle='crie a turma para adicionar pessoas'
        />

        <Input placeholder="Nome da turma" />

        <Button
          title='Criar'
          style={{ marginTop: 20 }}
          onPress={handleCreateGroup}
        />
      </NewGroupContent>
    </NewGroupContainer>
  );
}
