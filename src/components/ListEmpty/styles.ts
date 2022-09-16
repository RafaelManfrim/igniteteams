import styled from 'styled-components/native'

export const ListEmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const MessageContainer = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`