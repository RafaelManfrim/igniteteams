import { useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';

import { HeaderList, NumberOfPlayers, PlayerContainerForm, PlayersContainer } from './styles';
import { AppError } from '@utils/AppError';
import { addPlayerByGroup } from '@storage/player/addPlayerByGroup';

type PlayerRouteParams = {
  group: string
}

export function Players() {
  const [newPlayer, setNewPlayer] = useState('')
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState(['Rafael'])

  const route = useRoute()
  const { group } = route.params as PlayerRouteParams

  async function handleAddPlayer() {
    if (newPlayer.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar.')
    }

    const player = {
      name: newPlayer,
      team
    }

    try {
      await addPlayerByGroup(player, group)
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert('Nova pessoa', err.message)
      } else {
        console.log(err)
        Alert.alert('Nova pessoa', 'Houve um erro inesperado ao adicionar')
      }
    }
  }

  return (
    <PlayersContainer>
      <Header showBackButton />

      <Highlight title={group} subtitle='adicione a galera e separe os times' />

      <PlayerContainerForm>
        <Input
          placeholder='Nome da pessoa'
          autoCorrect={false}
          onChangeText={setNewPlayer}
        />
        <ButtonIcon icon='add' onPress={handleAddPlayer} />
      </PlayerContainerForm>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
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
