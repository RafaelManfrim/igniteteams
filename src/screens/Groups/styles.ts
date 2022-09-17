import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const GroupsContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`
