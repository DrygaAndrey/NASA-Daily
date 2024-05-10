
import styles from './styles.module.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


async function PictureOfTheDaySkeleton() {

    return (
        <SkeletonTheme duration={0.5} baseColor="#ffffff" highlightColor="#212121">
            <div className={styles.pictureOfTheDay}>
                <div className={styles.info}>

                    <h2><Skeleton /></h2>
                    <p>
                        <Skeleton count={3} />
                    </p>
                    <Skeleton width={150} height={30} />

                </div>
                <div className={styles.illustration}>
                    <Skeleton highlightColor='#d7d7d7' duration={1} width={300} height={300} className='img' />
                </div>

            </div>

        </SkeletonTheme>
    );
}
export default PictureOfTheDaySkeleton;

