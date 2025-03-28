import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href='#'>
        <TimerIcon size={62} />
        <span>Chronos</span>
      </a>
    </div>
  );
}
