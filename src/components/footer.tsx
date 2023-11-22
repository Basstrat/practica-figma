import type { NextPage } from 'next';
import styles from "../styles/index.module.css"
import Link from 'next/link';

const Footer6: NextPage = () => {
  return (
    <div style={{ position: "relative", backgroundColor: "#252b42", width: "100%", height: "526px", overflow: "hidden", textAlign: "left", fontSize: "16px", color: "#fff", fontFamily: "Martel", }}>
      <div style={{ position: "absolute", top: "0px", left: "0px", width: "1440px", height: "338px", display: "none", }}>
        <img style={{ position: "absolute", top: "0px", left: "0px", width: "1440px", height: "338px", overflow: "hidden", objectFit: "cover", }} alt="" src="cover.png" />
        <div style={{ position: "absolute", top: "0px", left: "0px", backgroundColor: "rgba(0, 0, 0, 0.5)", width: "1440px", height: "338px", overflow: "hidden", }} />
      </div>
      <div style={{ position: "absolute", width: "100%", top: "142px", right: "0px", left: "0px", height: "310px", overflow: "hidden", }}>
        <div style={{ position: "absolute", top: "0px", left: "0px", width: "1440px", height: "380px", display: "none", }}>
          <img style={{ position: "absolute", top: "0px", left: "0px", width: "1440px", height: "380px", overflow: "hidden", objectFit: "cover", }} alt="" src="cover.png" />
          <div style={{ position: "absolute", top: "0px", left: "0px", backgroundColor: "rgba(0, 0, 0, 0.5)", width: "1440px", height: "380px", overflow: "hidden", }} />
        </div>
        <form style={{ position: "absolute", top: "0px", left: "calc(50% - 525px)", width: "1050px", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "70px 0px", boxSizing: "border-box", }}>
          <div style={{ overflow: "hidden", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", gap: "30px", }}>
            <div className={styles.footerlinks}>
              <b style={{ position: "relative", letterSpacing: "0.1px", lineHeight: "24px" }}>Company Info</b>
              <div className={styles.divfooterinfo}>
                <Link href="/about-us" className={styles.linksinfofooter}>About Us</Link>
                <Link href="/about-us" className={styles.linksinfofooter}>Carrier</Link>
                <Link href="/about-us" className={styles.linksinfofooter}>We are hiring</Link>
                <Link href="/about-us" className={styles.linksinfofooter}>Blog</Link>
              </div>
            </div>

            <div className={styles.footerlinks}>
              <b style={{ position: "relative", letterSpacing: "0.1px", lineHeight: "24px" }}>Legal</b>
              <div className={styles.divfooterinfo}>
                <Link href="/about-us" className={styles.linksinfofooter}>About Us</Link>
                <Link href="/carrier" className={styles.linksinfofooter}>Carrier</Link>
                <Link href="/we-are-hiring" className={styles.linksinfofooter}>We are hiring</Link>
                <Link href="/blog" style={{ textDecoration: "none", color: "#bdbdbd", position: "relative", letterSpacing: "0.2px", lineHeight: "24px", fontWeight: "600" }}>Blog</Link>
              </div>
            </div>

            <div className={styles.footerlinks}>
              <b style={{ position: "relative", letterSpacing: "0.1px", lineHeight: "24px" }}>Features</b>
              <div className={styles.divfooterinfo}>
                <Link href="/about-us" className={styles.linksinfofooter}>Business Marketing</Link>
                <Link href="/about-us" className={styles.linksinfofooter}>User Analytic</Link>
                <Link href="/about-us" className={styles.linksinfofooter}>Live Chat</Link>
                <Link href="/about-us" className={styles.linksinfofooter}>Unlimited Support</Link>
              </div>
            </div>

            <div className={styles.footerlinks}>
              <b style={{ position: "relative", letterSpacing: "0.1px", lineHeight: "24px" }}>Resources</b>
              <div className={styles.divfooterinfo}>
                <Link href="/about-us" className={styles.linksinfofooter}>IOS & Android</Link>
                <Link href="/about-us" className={styles.linksinfofooter}>Watch a Demo</Link>
                <Link href="/about-us" className={styles.linksinfofooter}>Customers</Link>
                <Link href="/about-us" className={styles.linksinfofooter}>API</Link>
              </div>
            </div>
            <div style={{ width: "321px", overflow: "hidden", flexShrink: "0", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: "20px", }}>
              <b style={{ position: "relative", letterSpacing: "0.1px", lineHeight: "24px", }}>Get In Touch</b>
              <div style={{ position: "relative", width: "321px", height: "87px", fontSize: "14px", color: "#bdbdbd", fontFamily: "Montserrat", }}>
                <div style={{ position: "absolute", width: "100%", top: "0px", right: "0px", left: "0px", height: "58px", overflow: "hidden", }}>
                <div style={{ position: "absolute", height: "100%", width: "100%", top: "0px", right: "0px", bottom: "0px", left: "0px", borderRadius: "5px", backgroundColor: "#f9f9f9", border: "1px solid #e6e6e6", boxSizing: "border-box", overflow: "hidden", }}>
            <input type="email" placeholder="Your Email" style={{ position: "absolute", top: "calc(50% - 14px)", left: "20px", letterSpacing: "0.2px", lineHeight: "28px", width: "calc(100% - 40px)", border: "none", outline: "none", backgroundColor: "transparent" }} />
          </div>
                  <div style={{ position: "absolute", height: "100%", top: "0px", right: "0px", bottom: "0px", width: "117px", overflow: "hidden", textAlign: "center", color: "#fff", }}>
                    <button type="submit" style={{ position: "absolute", height: "100%", width: "100%", top: "0px", right: "0px", bottom: "0px", left: "0px", borderRadius: "0px 5px 5px 0px", backgroundColor: "#d0a144", border: "1px solid #e6e6e6", boxSizing: "border-box", overflow: "hidden", }}>
                      <div style={{ position: "absolute", top: "calc(50% - 14px)", left: "calc(50% - 36px)", letterSpacing: "0.2px", lineHeight: "28px", }}>Subscribe</div>
                    </button>
                  </div>
                </div>
                <div style={{ position: "absolute", bottom: "0px", left: "2px", fontSize: "12px", letterSpacing: "0.2px", lineHeight: "28px", }}>Lorem ipsum dolor amit</div>
              </div>
            </div>
          </div>
        </form>
      </div>
      			<div style={{position: "absolute", width: "100%", top: "0px", right: "0px", left: "0px", height: "142px", overflow: "hidden", fontSize: "24px",}}>
        				<div style={{position: "absolute", top: "0px", left: "0px", width: "1440px", height: "114px", display: "none",}}>
          					<img style={{position: "absolute", top: "0px", left: "0px", width: "1440px", height: "114px", overflow: "hidden", objectFit: "cover",}} alt="" src="cover.png" />
          					<div style={{position: "absolute", top: "0px", left: "0px", backgroundColor: "rgba(0, 0, 0, 0.5)", width: "1440px", height: "114px", overflow: "hidden",}} />
        				</div>
        				<div style={{position: "absolute", top: "0px", left: "calc(50% - 525px)", width: "1050px", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "40px 0px", boxSizing: "border-box",}}>
          					<div style={{overflow: "hidden", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "570px",}}>
            						<div style={{width: "236px", overflow: "hidden", flexShrink: "0", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start",}}>
              							<div style={{position: "relative", width: "187px", height: "58px", overflow: "hidden", flexShrink: "0",}}>
                								<b style={{position: "absolute", top: "13px", left: "0px", letterSpacing: "0.1px", lineHeight: "32px",}}>Litigade</b>
              							</div>
            						</div>
            						<div style={{width: "243px", overflow: "hidden", flexShrink: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start",}}>
              							<div style={{width: "236px", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start",}}>
                							
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div style={{position: "absolute", top: "141.5px", left: "calc(50% - 528.5px)", borderTop: "1px solid #364067", boxSizing: "border-box", width: "1058px", height: "1px",}} />
      			<div style={{position: "absolute", width: "100%", top: "452px", right: "0px", left: "0px", background: "linear-gradient(270deg, #295c7a, #0072b5)", height: "74px", overflow: "hidden", fontSize: "14px", fontFamily: "'Open Sans'",}}>
        				<div style={{position: "absolute", top: "0px", left: "0px", width: "1440px", height: "74px", display: "none",}}>
          					<img style={{position: "absolute", top: "0px", left: "0px", width: "1440px", height: "74px", overflow: "hidden", objectFit: "cover",}} alt="" src="cover.png" />
          					<div style={{position: "absolute", top: "0px", left: "0px", backgroundColor: "rgba(0, 0, 0, 0.5)", width: "1440px", height: "74px", overflow: "hidden",}} />
        				</div>
        				<div style={{position: "absolute", top: "0px", left: "calc(50% - 525px)", width: "1050px", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "25px 0px", boxSizing: "border-box",}}>
          					<div style={{overflow: "hidden", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start",}}>
            						<div style={{width: "600px", overflow: "hidden", flexShrink: "0", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start",}}>
              							<b style={{position: "relative", letterSpacing: "0.2px", lineHeight: "24px",}}>{`Made With Love By Figmaland All Right Reserved `}</b>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default Footer6;
