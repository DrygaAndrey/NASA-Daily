import React from 'react';
import styles from '../styles.module.scss';
import robotoCondensed from '@/app/fonts/font';

interface InfoProps {
    title: string | undefined;
    explanation: string | undefined
}

function Info({ title, explanation }: InfoProps) {


    return (
        <div className={styles.info}>
            <h2>{title}</h2>
            <p>
                {explanation?.split(' ').slice(0, 30).join(' ').concat(' ...')}
            </p>
            <button className={robotoCondensed.className}>Read more</button>
        </div>
    );
};

export default Info;

