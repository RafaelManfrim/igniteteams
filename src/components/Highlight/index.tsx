import {
  HighlightContainer,
  HighlightTitle,
  HighlightSubtitle
} from './styles';

type HighlightProps = {
  title: string;
  subtitle: string;
}

export function Highlight({ title, subtitle }: HighlightProps) {
  return (
    <HighlightContainer>
      <HighlightTitle>{title}</HighlightTitle>
      <HighlightSubtitle>{subtitle}</HighlightSubtitle>
    </HighlightContainer>
  );
}
