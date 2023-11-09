import React from 'react'
import styles from './CardBook.module.scss'

export default function CardBook({id, cover, title, author}) {
  return (
    <article id={id} className={styles.card}>
      <img src={cover} alt="" />
      <div className={styles["card-info"]}>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
      </div>
    </article>
  )
}
