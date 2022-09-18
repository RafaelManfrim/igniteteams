import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { createGroup } from '@storage/group/createGroup';

import { NewGroupContainer, NewGroupContent, NewGroupIcon } from './styles';

export function NewGroup() {
  const [groupName, setGroupName] = useState('');

  const navigation = useNavigation()

  async function handleCreateGroup() {
    await createGroup(groupName)
    navigation.navigate('players', { group: groupName })
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

        <Input placeholder="Nome da turma" onChangeText={setGroupName} />

        <Button
          title='Criar'
          style={{ marginTop: 20 }}
          onPress={handleCreateGroup}
        />
      </NewGroupContent>
    </NewGroupContainer>
  );
}
