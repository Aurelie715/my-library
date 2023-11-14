import React from 'react'
import styles from './MyBookSearchBar.module.scss'

export default function MyBookSearchBar({onSearchMyBookTextChange}) {
  return (
        <form>
            <input className={styles["search-bar"]} type="text" placeholder="chercher dans ma collection" onChange={(e) => onSearchMyBookTextChange(e.target.value)}/>
        </form>
  )
}
