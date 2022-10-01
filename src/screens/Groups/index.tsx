import { useState, useCallback } from 'react';
import { FlatList, Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { Loading } from '@components/Loading';
import { getAllGroups } from '@storage/group/getAllGroups';

import { GroupsContainer } from './styles';

export function Groups() {
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('newGroup')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)
      const groups = await getAllGroups()
      setGroups(groups)
    } catch (err) {
      console.log(err)
      Alert.alert('Turmas', 'Não foi possível carregar as turmas')
    } finaly {
      setIsLoading(false)
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <GroupsContainer>
      <Header />
      <Highlight title="Turmas" subtitle='jogue com a sua turma' />

      {isLoading ? (
        <Loading />
      ) : (

        <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
        />
      )}

      <Button title='Criar nova turma' onPress={handleNewGroup} />
    </GroupsContainer>
  )
}
