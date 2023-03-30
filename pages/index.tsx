import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function La() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
      </Head>

      <main className={styles.main}></main>
    </div>
  );
}
