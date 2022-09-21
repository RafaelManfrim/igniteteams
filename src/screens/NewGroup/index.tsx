import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert } from 'react-native';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { createGroup } from '@storage/group/createGroup';
import { AppError } from '@utils/AppError';

import { NewGroupContainer, NewGroupContent, NewGroupIcon } from './styles';

export function NewGroup() {
  const [groupName, setGroupName] = useState('');

  const navigation = useNavigation()

  async function handleCreateGroup() {
    try {
      if (groupName.trim().length === 0) {
        throw new AppError('Informe o nome da turma');
      }

      await createGroup(groupName)
      navigation.navigate('players', { group: groupName })
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert('Nova Turma', err.message)
      } else {
        Alert.alert('Erro Inesperado', 'Não foi possível criar a turma')
        console.log(err)
      }
    }
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
