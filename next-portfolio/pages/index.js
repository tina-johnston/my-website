import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles['header-wrapper']}>
      <div className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href='/profile'>profile</Link>
          </li>
          <li className={styles.li}>
            <Link href='/what-im-working-on'>what I'm working on</Link>
          </li>
          <li className={styles.li}>
            <Link href='/email-me'>email me</Link>
          </li>
        </ul>
      </div>
      <div className={styles.border} />
      <h2 className={styles.title}>Tina Johnston</h2>
      <div className={styles.footer}>
        <span className={styles['footer-item']}>react</span>
        <span className={styles['footer-item']}>redux-toolkit</span>
        <span className={styles['footer-item']}>next.js</span>
      </div>
    </div>
  );
};

export default Header;
