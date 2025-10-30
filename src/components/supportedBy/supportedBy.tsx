
import styles from "./supportedBy.module.css";

export default function SupportedBy() {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Supported By</h3>
      <div className={styles.logos}>
        <img src="/L6.png" alt="IISc" />
        <img src="/L1.png" alt="Honeywell"  />
        <img src="/L5.png" alt="DST Nidhi" />
        <img src="/L7.png" alt="GDC" />
        <img src="/L4.png" alt="SID" />
        <img src="/L3.png" alt="DM IISc" />
      </div>
    </section>
  );
}
