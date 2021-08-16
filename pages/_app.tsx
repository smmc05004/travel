import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
        />
        <meta name="description" content="Dev.log" />
        <meta
          name="keywords"
          content="blog,react,antd,webpack,css,javascript"
        />
      </Head>

      <GlobalStyle />

      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
