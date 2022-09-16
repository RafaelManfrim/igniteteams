import { HeaderContainer, Logo } from './styles';

import logoImg from '@assets/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <Logo source={logoImg} />
    </HeaderContainer>
  );
}
