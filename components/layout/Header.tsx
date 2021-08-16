import styled from "styled-components";

import AuthBtn from "./AuthBtn";
import Logo from "./Logo";
import Nav from "./Nav";

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo />

      <Nav />

      <AuthBtn />
    </Wrapper>
  );
};

export default Header;
