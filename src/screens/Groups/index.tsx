import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { GroupsContainer } from './styles';
import { getAllGroups } from '@storage/group/getAllGroups';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('newGroup')
  }

  async function fetchGroups() {
    try {
      const groups = await getAllGroups()
      setGroups(groups)
    } catch (err) {
      console.log(err)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <GroupsContainer>
      <Header />
      <Highlight title="Turmas" subtitle='jogue com a sua turma' />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
      />

      <Button title='Criar nova turma' onPress={handleNewGroup} />
    </GroupsContainer>
  )
}