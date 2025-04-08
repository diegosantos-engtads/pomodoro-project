import { Link } from 'react-router';
import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to='/about-pomodoro'>
        Entenda como Funciona a técnica de pomodoro
      </Link>
      <Link to='https://github.com/diegosantos-engtads'>
        <small>
          Criado por Diego Santos &copy; {new Date().getFullYear()} Chronos
          Pomodoro - 2025. Todos os direitos reservados.
        </small>
      </Link>
    </footer>
  );
}
