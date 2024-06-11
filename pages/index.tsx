import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss" 
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/components/homeNoAuth/presentationSection";
import CardSection from "@/components/homeNoAuth/cardSection";
import SlideSection from "@/components/homeNoAuth/slideSection";
// import { getStaticProps } from "next/dist/build/templates/pages";
import { GetStaticProps } from "next";
import courseService, { CourseType } from "@/services/courseService";
import { ReactNode } from "react";
import Footer from "@/components/common/footer";


interface IndexPageProps {
  children ?: ReactNode;
  course: CourseType []
}


const HomeNotAuth = function ({course}:IndexPageProps) {
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
          <SlideSection newestCourses={course} />
          <Footer />
	  </main>
    </>
  );
};
export const getStaticProps : GetStaticProps = async  () => {
  const res = await courseService.getNewestCourses ();
  return{
    props :{
      course:res.data,
    },
    revalidate : 3600 * 24 ,
  }
}

export default HomeNotAuth;