import styles from './layout.module.css';

export default function Lauput({ children }) {
    return <div className={styles.container}>{children}</div>;
}