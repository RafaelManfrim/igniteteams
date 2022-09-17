import styled, { css } from 'styled-components/native'

export const HighlightContainer = styled.View`
  width: 100%;
  margin: 32px 0;
`

export const HighlightTitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  `}
`

export const HighlightSubtitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
