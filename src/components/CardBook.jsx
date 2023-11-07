import React from 'react'
import styles from './CardBook.module.scss'

export default function CardBook() {
  return (
    <article className={styles.card}>
      <img src="./panique-a-la-ferme.jpg" alt="" />
      <div className={styles["card-info"]}>
        <p className={styles.title}>Panique à la ferme</p>
        <p className={styles.author}>Christine DORNER</p>
      </div>

    </article>
  )
}
