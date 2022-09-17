import styled, { css } from 'styled-components/native'

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

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`