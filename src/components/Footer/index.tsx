import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda como Funciona a técnica de pomodoro</a>
      <a href=''>
        <small>
          Criado por Diego Santos &copy; {new Date().getFullYear()} Chronos
          Pomodoro - 2025. Todos os direitos reservados.
        </small>
      </a>
    </footer>
  );
}
