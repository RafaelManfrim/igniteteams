import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

import { GroupsContainer } from './styles';

export function Groups() {
  return (
    <GroupsContainer>
      <Header />
      <Highlight title="Turmas" subtitle='jogue com a sua turma' />

      <GroupCard title='Galera do Ignite' />
      <GroupCard title='Galera do barulho' />
    </GroupsContainer>
  )
}