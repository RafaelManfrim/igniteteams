import AsyncStorage from '@react-native-async-storage/async-storage'

import { PLAYER_COLLECTION } from '@storage/config'
import { getPlayersByGroup } from './getPlayersByGroup'

export async function removePlayerByGroup(playerName: string, group: string) {
  try {
    const storage = await getPlayersByGroup(group)
    const filteredPlayers = storage.filter(player => player.name !== playerName)
    const players = JSON.stringify(filteredPlayers)
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)
  } catch (err) {
    throw err
  }
}