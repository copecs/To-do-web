import slika1 from "../../assets/danilo.png"
import slika2 from "../../assets/lena.png"
import slika3 from "../../assets/danilo.png"

import styles from "../../modules/Testimonials.module.css";

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>Naši ToDuovci:</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src={slika1} alt="Testimonial 1" />
          <p className={styles.text}>Što me moje obaveze sada zanimljivije...</p>
          <span className={styles.author}>- Dule Dulic</span>
        </div>
        <div className={styles.card}>
          <img src={slika2} alt="Testimonial 2" />
          <p className={styles.text}>ToDoo mi je olakšao svakodnevni rad...</p>
          <span className={styles.author}>- Lena Lenic</span>
        </div>
        <div className={styles.card}>
          <img src={slika3} alt="Testimonial 3" />
          <p className={styles.text}>Zahvaljujući ToDoo-u postao sam produktivniji...</p>
          <span className={styles.author}>- Dule Dulic</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
