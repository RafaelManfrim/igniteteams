import AsyncStorage from '@react-native-async-storage/async-storage'

import { PLAYER_COLLECTION } from '@storage/config'
import { AppError } from '@utils/AppError'

import { getPlayersByGroup } from './getPlayersByGroup'
import { PlayerStorageDTO } from './PlayerStorageDTO'

export async function addPlayerByGroup(newPlayer: PlayerStorageDTO, group: string) {
  try {
    const storedPlayers = await getPlayersByGroup(group)

    const playerAlreadyExists = storedPlayers.some(player => player.name === newPlayer.name)

    if (playerAlreadyExists) {
      throw new AppError('Essa pessoa já está adicionada em um time aqui.')
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (err) {
    throw err
  }
}