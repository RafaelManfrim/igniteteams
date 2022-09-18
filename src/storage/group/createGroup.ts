import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLLECTION } from '@storage/config'

import { getAllGroups } from './getAllGroups'

export async function createGroup(newGroupName: string) {
  try {
    const storedGroups = await getAllGroups()
    const storage = JSON.stringify([...storedGroups, newGroupName])
    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (err) {
    throw err
  }
}