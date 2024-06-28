import { EpisodeType } from "@/services/courseService";
import styles from"./styles.module.scss";

interface props{
    episode:EpisodeType;

}
const EpisodeList = function ({episode}:props){
    const handleSecondsToMin = (totalseconds:number)=>{
        const minutes = Math.floor(totalseconds/60);
        const seconds = totalseconds % 60 ;
        function toString(num:number){
            return num.toString ().padStart(2,"0")
        }
        const result = `${toString(minutes)}:${toString(seconds)}`;
        return result
    }
    
    return ( <>
        <div className={styles.episodeCard}>
            <div className={styles.episodeOrderTime}>
                <p className={styles.episodeOrder}>Episodio N</p>
                <p className={styles.episodeTime}>{handleSecondsToMin(episode.secondsLong)}</p>
            </div>
            <div className={styles.episodeTitleDescription}>
                <p className={styles.episodeTitle}>{episode.name}</p>
                <p className={styles.episodeDescription}>{episode.synopsis}</p>
            </div>
        </div>
    </>)
}
export default EpisodeList;