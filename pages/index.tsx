import type { NextPage } from "next";
import Head from "next/head";
import { useDispatch } from "react-redux";
import styled from "styled-components";
const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const onClick = () => {};

  return (
    <MainWrapper>
      <Head>
        <title>Travel | 메인 페이지</title>
      </Head>

      <div>
        <div>메인 페이지</div>

        <button type="button" onClick={onClick}>
          버튼
        </button>
      </div>
    </MainWrapper>
  );
};

export default Home;
