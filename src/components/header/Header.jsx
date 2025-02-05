import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './style.css';
import Btn from '../btn/Btn';

function Header() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Frontend Developer", "React Enthusiast", "Problem Solver"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Dima</em>
          </strong>
          <br />
          <span ref={typedRef}></span>
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <Btn href="/files/Dmytro_Tihtey_CV.pdf" download="Dima_CV.pdf">
          Download CV
        </Btn>
      </div>
    </header>
  );
}

export { Header };
