/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import styles from '../../styles/episodePlayer.module.scss';
import { useRouter } from 'next/router';
import HeaderGeneric from '@/components/common/headerGeneric';
import { useEffect, useState } from 'react';
import courseService, { CourseType } from '@/services/courseService';
import PageSpinner from '@/components/common/spinner';
import { Button, Container } from 'reactstrap';
import ReactPlayer from 'react-player';

const EpisodePlayer = function () {
	const router = useRouter();
	const [course, setCourse] = useState<CourseType>();
	const episodeOrder = parseFloat(router.query.id?.toString() || '');
	const courseId = router.query.courseid?.toString() || '';

	const getCourse = async function () {
		if (typeof courseId !== 'string') return;

		const res = await courseService.getEpisodes(courseId);
		if (res.status === 200) {
			setCourse(res.data);
		}
	};

	const handleLastEpisode = () => {
		router.push(`/course/episode/${episodeOrder - 1}?course.id`);
	};
	const handleNextEpisode = () => {
		router.push(`/course/episode/${episodeOrder + 1}?course.id`);
	};
	useEffect(() => {
		getCourse();
	}, [courseId]);

	if (course?.episodes === undefined) return <PageSpinner />;

	return (
		<>
			<Head>
				<title> Onebitflix -{course.episodes[episodeOrder].name}</title>
				<link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
			</Head>
			<main>
				<HeaderGeneric
					logourl="/home"
					btnContent={'Voltar para o curso'}
					btnUrl={`/course/${courseId}`}
				/>
				<Container className="d-flex flex-column align-items-center gap-3 pt-5">
					<p className={styles.episodeTitle}>
						{course.episodes[episodeOrder].name}
					</p>
					{typeof window === 'undefined' ? null : (
						<ReactPlayer
							classname={styles.player}
							url={`${
								process.env.NEXT_PUBLIC_BASEURL
							}/episodes/stream?videourl=${
								course.episodes[episodeOrder].videoUrl
							}&token=${sessionStorage.getItem('onebitflix-token')}	`}
							controls
						/>
					)}
					<div className={styles.episodeBtnDiv}>
						<Button
							className={styles.episodeBtn}
							disabled={episodeOrder === 0 ? true : false}
							onClick={handleLastEpisode}
						></Button>
						<img
							src="/episode/iconArrowLeft.svg"
							alt="seta esquerda"
							className={styles.arrowImg}
						/>
					</div>
					<div className={styles.episodeBtnDiv}>
						<Button
							className={styles.episodeBtn}
							disabled={
								episodeOrder + 1 === course.episodes.length ? true : false
							}
							onClick={handleNextEpisode}
						></Button>
						<img
							src="/episode/iconArrowRight.svg"
							alt="seta direita"
							className={styles.arrowImg}
						/>
					</div>
					<p className="text-center py-4">
						{course.episodes[episodeOrder].synopsis}
					</p>
				</Container>
			</main>
		</>
	);
};

export default EpisodePlayer;
