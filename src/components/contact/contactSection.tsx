import React from "react";
import styles from "./contactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>

        <div className={styles.map}>
          <iframe
            title="Wegro Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8245322296055!2d77.56068917529782!3d12.918635316064171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d18d3340f7%3A0x9584e67f65c1dcaf!2sIndian%20Institute%20of%20Science!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={styles.text}>
          <h2 className={styles.heading}>Contact Us</h2>

          <p className={styles.address}>
            <strong>Address:</strong> Indian Institute Of Science Campus,<br />
            Gulmohar Marg, Devasandra Layout,<br />
            Bengaluru, Karnataka 560012
          </p>

          <p className={styles.email}>
            <strong>Email:</strong> wegro.rethinkfood@gmail.com
          </p>

          <a
            className={styles.waButton}
            href="https://wa.me/919455386877"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ marginRight: 8 }}
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.552 4.154 1.599 5.964L0 24l6.267-1.574A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0m0 22c-1.821 0-3.588-.457-5.155-1.322l-.369-.197-3.722.936.994-3.63-.213-.373A9.94 9.94 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10m5.207-7.533c-.284-.142-1.677-.828-1.937-.922-.26-.095-.45-.142-.64.142-.189.284-.733.922-.898 1.111-.165.189-.35.213-.634.071-.284-.142-1.198-.441-2.284-1.408-.845-.753-1.414-1.683-1.579-1.967-.165-.284-.017-.438.124-.58.127-.127.284-.331.426-.496.142-.165.189-.284.284-.474.095-.189.047-.355-.024-.497-.071-.142-.64-1.54-.878-2.107-.23-.553-.465-.478-.64-.487l-.547-.01c-.189 0-.497.071-.758.355s-.995.972-.995 2.373 1.019 2.754 1.162 2.948c.142.189 2.005 3.061 4.86 4.29.68.293 1.212.468 1.626.6.683.217 1.304.186 1.796.113.548-.081 1.677-.685 1.914-1.346.237-.66.237-1.227.165-1.346-.071-.118-.26-.189-.544-.331"/>
            </svg>
            Connect with us
          </a>
        </div>
      </div>
    </section>
  );
}
