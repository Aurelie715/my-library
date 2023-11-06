import React from 'react';
import CardBook from '../components/CardBook';
import styles from './Home.module.scss';
import Categories from '../components/SideBar/Categories';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}> 
      <Categories className={styles.categories}/>
      <div className={styles["home-container"]}>
        <Header />
        <div className={styles["books-container"]}>
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        </div>
      </div>
    </div>
  )
}
