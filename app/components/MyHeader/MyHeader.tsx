import styles from './styles.module.scss';
import Link from 'next/link';

function MyHeader() {
    return (
        <header className={styles.myHeader}>
            <h1><Link href={'./'}>Planets site</Link></h1>
        
        </header>
    );
}


export default MyHeader;