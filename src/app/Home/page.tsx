import Image from 'next/image'
import styles from "@/style/home.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Welcome to Luxury Hotel</h1>
          <p>Experience comfort and elegance</p>
        </div>
      </section>
      <section className={`${styles.features} container`}>
        <h2>Our Features</h2>
        <div className={styles.featureGrid}>
          <div className={styles.feature}>
            <Image src="/kaka17.jpg?height=100&width=100" alt="Spa" width={200} height={200} />
            <h3>Luxurious Spa</h3>
            <p>Relax and rejuvenate in our world-class spa.</p>
          </div>
          <div className={styles.feature}>
            <Image src="/kaka16.jpg?height=100&width=100" alt="Restaurant" width={200} height={200} />
            <h3>Fine Dining</h3>
            <p>Enjoy exquisite cuisine in our gourmet restaurant.</p>
          </div>
          <div className={styles.feature}>
            <Image src="/kaka15.jpg?height=100&width=100" alt="Pool" width={200} height={200} />
            <h3>Infinity Pool</h3>
            <p>Take a dip in our stunning infinity pool with ocean views.</p>
          </div>
        </div>
      </section>
    </main>
  )
}