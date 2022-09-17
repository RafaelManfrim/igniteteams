import { useState } from 'react';
import { FlatList } from 'react-native';

import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';

import { HeaderList, NumberOfPlayers, PlayerContainerForm, PlayersContainer } from './styles';

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState(['Rafael'])

  return (
    <PlayersContainer>
      <Header showBackButton />

      <Highlight title='Nome da turma' subtitle='adicione a galera e separe os times' />

      <PlayerContainerForm>
        <Input placeholder='Nome da pessoa' autoCorrect={false} />
        <ButtonIcon icon='add' />
      </PlayerContainerForm>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B', 'Time C', 'Time D']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => { }} />
        )}
        ListEmptyComponent={() => <ListEmpty message='Não há pessoas nesse time' />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
      />

      <Button title='Remover turma' type='SECONDARY' />
    </PlayersContainer>
  );
}
