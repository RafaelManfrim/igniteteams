import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/config'

import { getAllGroups } from './getAllGroups'

export async function deleteGroupByName(groupDeleted: string) {
  try {
    const storedGroups = await getAllGroups()
    const newGroups = storedGroups.filter((group) => group !== groupDeleted)
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(newGroups))
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`)
  } catch (err) {
    throw err
  }
}