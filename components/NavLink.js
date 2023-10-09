import Link from "next/link";
import styles from '../styles/NavLink.module.css';

export const NavLink = ({text, href}) => {
  return (
    <Link href={href} className={styles.navLink}
  >
    {text}
  </Link>);
}
