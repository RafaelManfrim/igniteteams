import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLLECTION } from '@storage/config'
import { AppError } from '@utils/AppError'

import { getAllGroups } from './getAllGroups'

export async function createGroup(newGroupName: string) {
  try {
    const storedGroups = await getAllGroups()

    const groupAlreadyExists = storedGroups.includes(newGroupName)

    if (groupAlreadyExists) {
      throw new AppError('A turma digitada já existe')
    }

    const storage = JSON.stringify([...storedGroups, newGroupName])
    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (err) {
    throw err
  }
}
