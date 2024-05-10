
import styles from './styles.module.scss';
import Info from './components/info';
import Illustration from './components/illustration';

export interface Picture {
    date: string;
    explanation: string;
    title: string;
    url: string;
    hdurl: string;
    media_type: string;
}

async function PictureOfTheDay() {
    const picture: Picture | undefined = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`)
        .then(response => response.json())
        .then(response => response as Picture)
        .catch(error => {
            console.error('Error:', error);
            return undefined;
        });
    return (

        <div className={styles.pictureOfTheDay}>
            <Info title={picture && picture.title} explanation={picture && picture.explanation} />
            <Illustration picture={picture} />
        </div>

    );
}
export default PictureOfTheDay;

