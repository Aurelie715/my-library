import React from 'react';
import CardBook from '../components/CardBook';
import styles from './Home.module.scss';
import Categories from '../components/SideBar/Categories';
import Header from '../components/Header';
import BookList from '../data/bookList.json'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles.container}> 
      <Categories className={styles.categories}/>
      <div className={styles["home-container"]}>
        <Header />
        <div className={styles["books-container"]}>
          {BookList.map(({id, cover, title, author}) => {
            return (
              <Link className={styles.link} key={id} to={`/book/${id}`}><CardBook id={id} cover={cover} title={title} author={author}/></Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
