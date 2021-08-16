import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Home: NextPage = () => {
  return (
    <MainWrapper>
      <Head>
        <title>Travel | 메인 페이지</title>
      </Head>

      <div>메인 페이지</div>
    </MainWrapper>
  );
};

export default Home;
