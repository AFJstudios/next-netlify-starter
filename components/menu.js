import styles from './menu.module.css';

export default function menu() {
    return (
        <ul className={styles.mainmenu}>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/blog'>Blog</a>
            </li>
        </ul>
    );
  }