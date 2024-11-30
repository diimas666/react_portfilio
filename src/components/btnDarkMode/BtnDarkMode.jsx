import { useEffect, useRef } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';
import sun from './sun.svg';
import mon from './moon.svg';
import './style.css';

function BtnDarMode() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'light');
  const btnRef = useRef(null);

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
      btnRef.current.classList.add('dark-mode-btn--active');
    } else {
      document.body.classList.remove('dark');
      btnRef.current.classList.remove('dark-mode-btn--active');
    }
  }, [darkMode]);

  const toggleDarMode = () => {
    setDarkMode((currentValue) =>
      currentValue === 'light' ? 'dark' : 'light'
    );
  };

  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={mon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}

export { BtnDarMode };
