import { ListEmptyContainer, MessageContainer } from './styles';

type ListEmptyProps = {
  message: string
}

export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <ListEmptyContainer>
      <MessageContainer>{message}</MessageContainer>
    </ListEmptyContainer>
  );
}
