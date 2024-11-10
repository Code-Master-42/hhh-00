import styles from "@/style/contact.module.css"

export default function Contact() {
  return (
    <main className={`${styles.main} container`}>
      <h1>Contact Us</h1>
      <div className={styles.contactInfo}>
        <div>
          <h2>Address</h2>
          <p>123 Luxury Avenue, Paradise City, 12345</p>
        </div>
        <div>
          <h2>Phone</h2>
          <p>+1 (123) 456-7890</p>
        </div>
        <div>
          <h2>Email</h2>
          <p>info@luxuryhotel.com</p>
        </div>
      </div>
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </main>
  )
}