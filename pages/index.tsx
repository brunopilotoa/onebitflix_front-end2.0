import Head from "next/head";
import styles from "../styles/homeNoAuth.module.scss" 
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";

const HomeNotAuth = function () {
  return (
    <>
      <Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
		<HeaderNoAuth />

	  </main>
    </>
  );
};

export default HomeNotAuth;