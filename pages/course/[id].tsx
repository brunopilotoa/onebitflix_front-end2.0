/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../../styles/coursePage.module.scss";
import HeaderAuth from "@/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/services/courseService";
import { Button, Container } from "reactstrap";
import PageSpinner from "@/components/common/spinner";
import EpisodeList from "@/components/episodeList";
import Footer from "@/components/common/footer";

const CoursePage = function (){
    const [course,setCourse]= useState <CourseType> ();
    const [liked,setLiked]= useState (false);
    const [favorited,setFavorited]= useState (false);
    const router = useRouter();
    const {id} = router.query ;

    const getCourse = async function () {
    if(typeof id	!== "string") return ;

        const res = await courseService.getEpisodes(id);

        if(res.status === 200) {
        setCourse(res.data);
        setLiked(res.data.liked);
        setFavorited(res.data.favorited);
        }
    };

    useEffect(()=> {
        getCourse();
    },[id]) ;
	
	const handleLikeCourse = async (){
    if(typeof id	!== "string") return ;

		if(liked ===true){
			await courseService.removeLike(id)
			setLiked(false);
		}else{
			await courseService.like(id)
			setLiked(true)
		}
	}
	const handleFavCourse = async (){
    if(typeof id	!== "string") return ;

		if(favorited ===true){
			await courseService.removeFav(id)
			setFavorited(false);
		}else{
			await courseService.addToFav(id)
			setFavorited(true)
		}
	};
	if (course === undefined) return<PageSpinner/>;

    return(
        <>
            <Head>
            <title> Onebitflix -{course?.name}</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <div style={{
                    backgroundImage:`linear-gradient(to-bottom, #6666661a,#151515),url(${process.env.NEXT_PUBLIC_BASEURL}/${course?.thumbnailUrl})`,
                    backgroundSize : "cover",
                    backgroundPosition: "center",
                    minHeight :"550px"
                    }}>
                <HeaderAuth />
                </div>
                <Container className={styles.courseInfo}>
                    <p className={styles.courseTitle}>{course?.name}</p>
                    <p className={styles.courseDescription}>{course?.synopsis}</p>
                    <Button 
                    outline className={styles.courseBtn} 
                    disabled={course?.episodes?.length === 0 ? true : false}>
                        Assistir Agora
                        <img src="/buttonPlay.svg" alt="buttonImg" className={styles.buttonImg}/>
                    </Button>
                    <div className={styles.interactions}>
                        {
                            liked === false? (
                                <img 
                                src="/course/iconLike.svg" 
                                alt="likeImage" 
                                className={styles.interactionsImg}
                                onClick={handleLikeCourse}
                                />
                            ) : (
                                <img 
                                src="/course/iconLiked.svg" 
                                alt="likeImage" 
                                className={styles.interactionsImg}
                                onClick={handleLikeCourse}
                                />
                            )
                        }{favorited === false? (
								<img 
														src="/course/iconAddFav.svg" 
														alt="" 
														className={styles.interactionsImg}
														onClick={handleFavCourse}
														/>
													) : (
														<img 
														src="/course/iconFavorited.svg" 
														alt="" 
														className={styles.interactionsImg}
														onClick={handleFavCourse}
														/>
													)
											}
                    </div>
                </Container>
								<Container className={styles.episodeInfo}>
								<p className={styles.episodeDivision}>Episodios</p>
									<p className={styles.episodeLength}>
										{course?.episodes?.length} episodios</p>
											{course?.episodes?.length === 0 ? (
											<p>
												<strong> NAO HA EPISODIOS DISPONIVEIS</strong>
											</p>
										):(course.episodes?.map((episode)=>(
										<EpisodeList key={episode.id} episode={episode} course={course}/>
										))
										)}
								</Container>
            </main>
						<Footer/>
        </>

    )
}

export default CoursePage;