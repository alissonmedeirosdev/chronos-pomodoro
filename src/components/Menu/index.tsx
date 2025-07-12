import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

type AvailableTheme = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableTheme>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableTheme) || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme == 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <Link
        className={styles.menuLink}
        to='/'
        aria-label='Ir para a Home'
        title='Home'
      >
        <HouseIcon />
      </Link>

      <Link
        className={styles.menuLink}
        to='#'
        aria-label='Ir para a Histórico'
        title='Histórico'
      >
        <HistoryIcon />
      </Link>

      <Link
        className={styles.menuLink}
        to='#'
        aria-label='Ir para as Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </Link>

      <Link
        className={styles.menuLink}
        to='#'
        aria-label='Mudar o thema'
        title='Mudar o thema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </Link>
    </nav>
  );
}
