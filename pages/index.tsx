import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss" 
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/components/homeNoAuth/presentationSection";
import CardSection from "@/components/homeNoAuth/cardSection";
const HomeNotAuth = function () {
  return (
    <>
      <Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
      <div className={styles.sectionBackground}>

		<HeaderNoAuth />
    <PresentationSection/>
        </div>
          <CardSection />
	  </main>
    </>
  );
};

export default HomeNotAuth;