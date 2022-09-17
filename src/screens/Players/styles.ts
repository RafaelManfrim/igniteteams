import styled from 'styled-components/native'

export const PlayersContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`

export const PlayerContainerForm = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex-direction: row;
  justify-content: center;
  width: 100%;
  border-radius: 6px;
`