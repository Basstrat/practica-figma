// components/Header.tsx
import Link from 'next/link';
import styles from "../styles/index.module.css";

const footer = () => {
  return (
    <div className={styles.footer6}>
        <div className={styles.background7}>
        </div>

       
          <div className={styles.container7}>
            <div className={styles.row11}>
              <div className={styles.colMd2}>
                <b className={styles.h5}>Company Info</b>
                <div className={styles.div16}>
                  <div className={styles.link7}>About Us</div>
                  <div className={styles.link7}>Carrier</div>
                  <div className={styles.link7}>We are hiring</div>
                  <div className={styles.link7}>Blog</div>
                </div>
              </div>


              <div className={styles.colMd21}>
                <b className={styles.h5}>Legal</b>
                <div className={styles.div16}>
                  <div className={styles.link7}>About Us</div>
                  <div className={styles.link7}>Carrier</div>
                  <div className={styles.link7}>We are hiring</div>
                  <div className={styles.link7}>Blog</div>
                </div>
              </div>


              <div className={styles.colMd2}>
                <b className={styles.h5}>Features</b>
                <div className={styles.div16}>
                  <div className={styles.link7}>Business Marketing</div>
                  <div className={styles.link7}>User Analytic</div>
                  <div className={styles.link7}>Live Chat</div>
                  <div className={styles.link7}>Unlimited Support</div>
                </div>
              </div>


              <div className={styles.colMd21}>
                <b className={styles.h5}>Resources</b>
                <div className={styles.div16}>
                  <div className={styles.link7}>{`IOS & Android`}</div>
                  <div className={styles.link7}>Watch a Demo</div>
                  <div className={styles.link7}>Customers</div>
                  <div className={styles.link7}>API</div>
                </div>
              </div>
              </div>
          </div>
        </div>
        
  );
};

export default footer;
