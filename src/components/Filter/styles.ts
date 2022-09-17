import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type FilterStyleProps = {
  isActive?: boolean
}

export const FilterContainer = styled(TouchableOpacity) <FilterStyleProps>`
  ${({ theme, isActive }) => isActive && css`
    border: 1px solid ${theme.COLORS.GREEN_700};
  `} 

  margin-right: 12px;
  border-radius: 4px;

  height: 38px;
  width: 70px;

  align-items: center;
  justify-content: center;
`

export const FilterText = styled.Text<FilterStyleProps>`
  text-transform: uppercase;
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  `} 
`