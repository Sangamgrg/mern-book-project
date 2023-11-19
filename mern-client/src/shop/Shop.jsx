import React, { useEffect, useState } from "react";

import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://mern-book-project.vercel.app/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-28 px-4 lg:px-2 4">
      <h2 className="text-5xl font-bold text-center">All Books are here</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card>
            <img src={book.imageURL} alt="" className="h-96" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{book.bookTitle}</p>
            </h5>
            <p>{book.authorName}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {book.bookDescription}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
