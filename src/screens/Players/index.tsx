import { useEffect, useState, useRef } from 'react';
import { Alert, FlatList, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Loading } from '@components/Loading';
import { AppError } from '@utils/AppError';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { addPlayerByGroup } from '@storage/player/addPlayerByGroup';
import { removePlayerByGroup } from '@storage/player/removePlayerByGroup';
import { getPlayersByGroupAndTeam } from '@storage/player/getPlayerByGroupAndTeam';
import { deleteGroupByName } from '@storage/group/deleteGroupByName';

import { HeaderList, NumberOfPlayers, PlayerContainerForm, PlayersContainer } from './styles';

type PlayerRouteParams = {
  group: string
}

export function Players() {
  const [isLoading, setIsLoading] = useState(true)
  const [newPlayerName, setNewPlayerName] = useState('')
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

  const navigation = useNavigation()

  const route = useRoute()
  const { group } = route.params as PlayerRouteParams

  const newPlayerNameInputRef = useRef<TextInput>(null)

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar.')
    }

    const player = {
      name: newPlayerName,
      team
    }

    try {
      await addPlayerByGroup(player, group)
      newPlayerNameInputRef.current?.blur()
      setNewPlayerName('')
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
      setIsLoading(true)
      const players = await getPlayersByGroupAndTeam(group, team)
      setPlayers(players)
    } catch (err) {
      console.log(err)
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado.')
    } finally {
      setIsLoading(false)
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await removePlayerByGroup(playerName, group)
      fetchPlayersByTeam()
    } catch (err) {
      console.log(err)
      Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa.')
    }
  }

  async function deleteGroup() {
    try {
      await deleteGroupByName(group)
      navigation.navigate('groups')
    } catch (err) {
      console.log(err)
      Alert.alert('Remover turma', 'Não foi possível remover esse turma.')
    }
  }

  function handleDeleteGroup() {
    Alert.alert('Remover turma', 'Deseja remover o turma?', [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: deleteGroup,
        style: 'destructive'
      }
    ])
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
          inputRef={newPlayerNameInputRef}
          placeholder='Nome da pessoa'
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
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

      {isLoading ? (
        <Loading />
      ) : (

        <FlatList
          data={players}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <PlayerCard name={item.name} onRemove={() => handleRemovePlayer(item.name)} />
          )}
          ListEmptyComponent={() => <ListEmpty message='Não há pessoas nesse time' />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
        />
      )}

      <Button title='Remover turma' type='SECONDARY' onPress={handleDeleteGroup} />
    </PlayersContainer>
  );
}
