
import styles from "./supportedBy.module.css";

export default function SupportedBy() {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Supported By</h3>
      <div className={styles.logos}>
        <img src="./src/assets/logos/L6.png" alt="IISc" />
        <img src="./src/assets/logos/L1.png" alt="Honeywell"  />
        <img src="./src/assets/logos/L5.png" alt="Honeywell" />
        <img src="./src/assets/logos/L7.png" alt="Honeywell" />
        <img src="./src/assets/logos/L4.png" alt="Honeywell" />
        <img src="./src/assets/logos/L3.png" alt="Honeywell" />
      </div>
    </section>
  );
}
