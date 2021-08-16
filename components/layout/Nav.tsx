import styled from "styled-components";
import Link from "next/link";
const Wrapper = styled.nav`
  nav {
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      width: 100%;

      li {
        width: 100%;

        a {
          width: calc(100% / 3);
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <Wrapper>
      <nav>
        <ul>
          <li>
            <Link href="#" passHref>
              <a>메뉴1</a>
            </Link>
          </li>
          <li>
            <Link href="#" passHref>
              <a>메뉴2</a>
            </Link>
          </li>
          <li>
            <Link href="/survey" passHref>
              <a>Survey</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Nav;
