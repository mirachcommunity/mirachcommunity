import Link from 'next/link';
import styles from './notfound.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>

        <h1 className={styles.gradientText}>Oops!</h1>

        <p className={styles.description}>
          Sepertinya halaman yang Anda cari tidak ada atau dalam perbaikan.
        </p>

        <Link href="/" className={styles.button}>
          Kembali ke Beranda
        </Link>

      </div>
    </div>
  );
}