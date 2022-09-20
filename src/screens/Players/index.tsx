import { useEffect, useState } from 'react';
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
import { AppError } from '@utils/AppError';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { addPlayerByGroup } from '@storage/player/addPlayerByGroup';
import { getPlayersByGroupAndTeam } from '@storage/player/getPlayerByGroupAndTeam';

import { HeaderList, NumberOfPlayers, PlayerContainerForm, PlayersContainer } from './styles';

type PlayerRouteParams = {
  group: string
}

export function Players() {
  const [newPlayer, setNewPlayer] = useState('')
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

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
      fetchPlayersByTeam()
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert('Nova pessoa', err.message)
      } else {
        console.log(err)
        Alert.alert('Nova pessoa', 'Houve um erro inesperado ao adicionar')
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const players = await getPlayersByGroupAndTeam(group, team)
      setPlayers(players)
    } catch (err) {
      console.log(err)
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado.')
    }
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [group, team])

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
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={() => { }} />
        )}
        ListEmptyComponent={() => <ListEmpty message='Não há pessoas nesse time' />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
      />

      <Button title='Remover turma' type='SECONDARY' />
    </PlayersContainer>
  );
}
