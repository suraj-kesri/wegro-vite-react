import styles from "./footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div>
          <h2 className={styles.heading}>Wegro Greenlabs Pvt Ltd</h2>
          <p className={styles.tagline}>
            Freedom to Grow
          </p>
        </div>

        <div>
          <h3 className={styles.subHeading}>Quick Links</h3>
          <ul className={styles.links}>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/leafpanel">Leafpanel</Link></li>
            <li><Link to="/anno">Anno</Link></li>
            <li><Link to="/nurch">Nurch</Link></li>
            <li><Link to="/ourstory">Our Story</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className={styles.subHeading}>Contact</h3>
          <p className={styles.address}>
            Indian Institute Of Science Campus,<br />
            Gulmohar Marg, Devasandra Layout,<br />
            Bengaluru, Karnataka 560012
          </p>

          <a className={styles.email} href="mailto:contact@wegro.in">
            contact@wegro.in
          </a>
          {/*
          <div className={styles.icons}>
            
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
            </svg>

            
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 23.75h4.5V7.5h-4.5v16.25zM8 7.5v16.25h4.5V14.7c0-2.88 3.5-3.12 3.5 0v9.05H20.5V13.5c0-6.5-7.48-6.27-8-3.07V7.5H8z"/>
            </svg>

          </div> 
          */}
        </div>

      </div>

      <div className={styles.copy}>
        © Wegro Greenlabs Pvt Ltd {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
}
