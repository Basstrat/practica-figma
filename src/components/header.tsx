import Link from 'next/link';
import styles from "../styles/index.module.css";

const Header = () => {
  return (
    <div className={styles.navbarStyle1NavbarLight}>
    <div className={styles.navbarBrand}>
      <b >Litigade</b>
    </div>
    
    <div className={styles.collapseNavbarCollapse}>
      <div className={styles.navbarNav}>
      <Link href="/">
        <div className={styles.li}>
          <div className={styles.a}>
            <div className={styles.link}>Home</div>
          </div>
        </div>
        </Link>
        <div className={styles.li1}>
          <div className={styles.a1}>
            <div className={styles.link1}>Product</div>
          </div>
        </div>
        <div className={styles.li2}>
          <div className={styles.a2}>
            <div className={styles.link2}>Pricing</div>
          </div>
        </div>
        <div className={styles.li3}>
          <div className={styles.a3}>
            <div className={styles.link3}>Contact</div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  );
};


export default Header;
