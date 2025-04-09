import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro'>
        Entenda como Funciona a técnica de pomodoro
      </RouterLink>
      <RouterLink href='https://github.com/diegosantos-engtads'>
        <small>
          Criado por Diego Santos &copy; {new Date().getFullYear()} Chronos
          Pomodoro - 2025. Todos os direitos reservados.
        </small>
      </RouterLink>
    </footer>
  );
}
