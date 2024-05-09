'use client'
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import robotoCondensed from '../../fonts/font'
import Info from './components/info';
import BackgroundVideo from './components/backgroundVideo';

interface Picture {
    date: string;
    explanation: string;
    title: string;
    url: string;
    hdurl: string;
    media_type: string;
}

function PictureOfTheDay() {
    const [picture, setPicture] = useState<Picture | null>(null);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`)
            .then(response => setPicture(response.data))
            .catch(error => console.error('Error:', error));
    }, []);

    const videoId = picture?.url?.split('/').pop()?.split('?').shift();
    console.log(videoId);
    return (
        <div
            className={styles.pictureOfTheDay}
            style={{ backgroundImage: picture?.media_type === 'image' ? `url(${picture.url})` : '' }}
        >

            {picture?.media_type === 'video' && (
                <BackgroundVideo url={picture?.url} />
            )}
            <Info title={picture?.title} explanation={picture?.explanation} />
        </div >
    );
}

export default PictureOfTheDay;