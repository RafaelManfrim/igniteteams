import AsyncStorage from '@react-native-async-storage/async-storage'

import { PLAYER_COLLECTION } from '@storage/config'

import { PlayerStorageDTO } from './PlayerStorageDTO'

export async function getPlayersByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`)

    const storedPlayers: PlayerStorageDTO[] = storage ? JSON.parse(storage) : []

    return storedPlayers
  } catch (err) {
    throw err
  }
}