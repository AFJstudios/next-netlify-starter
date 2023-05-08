import styles from './menu.module.css';

export default function menu() {
    return (
        <div className={styles.mainmenu}>
            <ul className={styles.container}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/blog'>Blog</a>
                </li>
                <li>
                    <a href='/calendar'>Let's Meet!</a>
                </li>
            </ul>
        </div>
    );
  }