import React, { useState } from "react";
import CardBook from "../components/CardBook";
import styles from "./Home.module.scss";
import Categories from "../components/SideBar/Categories";
import Header from "../components/Header";
import BookList from "../data/bookList.json";
import { Link } from "react-router-dom";
import MyBookSearchBar from "../components/Filter/MyBookSearchBar";

export default function Home() {
  const [searchMyBooks, setSearchMyBooks] = useState("");
  let books = BookList;
  if (searchMyBooks !== "") {
    books = BookList.filter(({ title, author }) => {
      return [title, author].some((prop) => prop.toLowerCase().indexOf(searchMyBooks.toLowerCase()) !== -1);
      // return (
      //   title.toLowerCase().indexOf(searchMyBooks.toLowerCase()) !== -1 ||
      //   author.toLowerCase().indexOf(searchMyBooks.toLowerCase()) !== -1
      // );
    });
  }

  return (
    <div className={styles.container}>
      <Categories className={styles.categories} />
      <div className={styles["home-container"]}>
        <Header />
        <MyBookSearchBar onSearchMyBookTextChange={setSearchMyBooks} />
        <div className={styles["books-container"]}>
          {books.map(({ id, cover, title, author }) => {
            return (
              <Link className={styles.link} key={id} to={`/book/${id}`}>
                <CardBook id={id} cover={cover} title={title} author={author} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
