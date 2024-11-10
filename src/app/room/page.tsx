import Image from 'next/image'
import styles from "@/style/room.module.css"

const rooms = [
  { name: 'Deluxe Room', price: 200, image: '/kaka14.jpg?height=200&width=300' },
  { name: 'Suite', price: 350, image: '/kaka12.jpg?height=200&width=300' },
  { name: 'Penthouse', price: 500, image: '/kaa13.jpg?height=200&width=300' },
]

export default function Rooms() {
  return (
    <main className={`${styles.main} container`}>
      <h1>Our Rooms</h1>
      <div className={styles.roomGrid}>
        {rooms.map((room, index) => (
          <div key={index} className={styles.room}>
            <Image src={room.image} alt={room.name} width={640} height={200} />
            <h2>{room.name}</h2>
            <p>Starting from ${room.price} per night</p>
            <button className={styles.bookButton}>Book Now</button>
          </div>
        ))}
      </div>
    </main>
  )
}