import { useState } from 'react';

import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

import { GroupsContainer } from './styles';
import { FlatList } from 'react-native';

export function Groups() {
  const [groups, setGroups] = useState(['Galera do Ignite', 'Galera do barulho'])

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
      />
    </GroupsContainer>
  )
}