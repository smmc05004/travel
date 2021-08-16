import styled from "styled-components";

const Wrapper = styled.nav`
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Nav = () => {
  return (
    <Wrapper>
      <nav>
        <ul>
          <li>메뉴1</li>
          <li>메뉴2</li>
          <li>메뉴3</li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Nav;
