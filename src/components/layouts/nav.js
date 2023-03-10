import styles from "./Nav.module.scss";
import Link from 'next/link'
import emoji from 'react-easy-emoji';
import { useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className={`${styles.nav}  ${isOpen ? styles.open : ''}`}>
      {isOpen ? (
        <AiOutlineClose size={37} onClick={() => setOpen(!isOpen)} color="#fff" style={{ 
            position: 'absolute', top: '6px', right: '6px'
         }} />
      ) : (
        <HiBars3CenterLeft size={45} onClick={() => setOpen(!isOpen)} />
      )}
      <ul className={`${isOpen ? styles.openLinks : ''}`}>
        <li><Link href="/">{ emoji('Inicio ð ') }</Link></li>
        <li><Link href="/aboutme">{ emoji('Sobre MÃ­ ð¦') }</Link></li>
        <li><Link href="/proyects">{ emoji('Proyectos ð') }</Link></li>
        <li><Link href="/mayte"><b>{ emoji('Mayte ð') } </b></Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
