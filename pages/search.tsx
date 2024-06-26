import Head from "next/head";
import styles from "../styles/search.module.scss";
import HeaderAuth from "@/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseService  from "@/services/courseService";
import { CourseType } from "@/services/courseService";
import { Container } from "reactstrap";
import SearchCard from "@/components/searchCard";


const Search = function () {
    const router = useRouter ();
    const searchName : any = router.query.name ;
    const [searchResult, setSearchResult] = useState < CourseType []>([]);

    const searchCourses = async function () {
      
            const res = await courseService.getSearch(searchName);
            setSearchResult(res.data.courses);
      
    } ;
        useEffect(() =>{searchCourses() },
        [searchName]);
    return (
        <>
            <Head>
            <title>Onebitflix - {searchName}
                </title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />           
            </Head>
            <main className={styles.main}>
                <div className={styles.headFooterBg}>
                <HeaderAuth/>
                </div>
                {searchResult.length>=1 ? (
                    <div className={styles.searchContainer}>

                    <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
                        {searchResult?.map((course)=>
                    (
                        <SearchCard key={course.id} course={course}/>
                    ))}
                    </Container>
                    </div>
            ):(
                <div className={styles.searchContainer}>
                    <p className={styles.noSearchResult}> NENHUM RESULTADO ENCONTRADO</p>
                        </div>
                )}
                <div className={styles.headFooterBg}>
                <Footer/>
                </div>
            </main>
        </>
    )
}

export default Search