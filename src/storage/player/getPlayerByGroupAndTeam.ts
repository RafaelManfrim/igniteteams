import { getPlayersByGroup } from "./getPlayersByGroup"

export async function getPlayersByGroupAndTeam(group: string, team: string) {
  try {
    const playersInGroup = await getPlayersByGroup(group)
    const playersInTeam = playersInGroup.filter(player => player.team === team)
    return playersInTeam
  } catch (err) {
    throw err
  }
}