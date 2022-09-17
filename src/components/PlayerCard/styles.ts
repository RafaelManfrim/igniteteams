import styled, { css } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export const PlayerCardContainer = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex-direction: row;
  border-radius: 6px;
  align-items: center;
  margin-bottom: 16px;
`

export const PlayerName = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

export const PlayerIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-right: 4px;
  margin-left: 16px;
`
