import { Picture } from "../PictureOfTheDay";
import VideoFrame from "./videoFrame";
import styles from '../styles.module.scss';
interface Props {
    picture: Picture | undefined
}
function Illustration({ picture }: Props) {

    return (
        <div className={styles.illustration}>
            {picture && picture.media_type === 'video' && (
                <VideoFrame url={picture.url || ''} />
            )}
            {picture && picture.media_type === 'image' && (
                <img src={picture.hdurl} alt={picture.title} />
            )}
        </div>
    );
}

export default Illustration;

