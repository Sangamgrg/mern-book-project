import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { _id, bookTitle, authorName, imageURL, category, bookDescription } =
    useLoaderData();
  return (
    <div className="mt-28 px-4 lg:px-24">
      <div className="flex justify-between gap-4 lg:gap-x-12  flex-col sm:flex-row">
        <div className="w-2/12">
          <img src={imageURL} alt="" className="w-96" />
        </div>
        <div className="text-black w-10/12 flex flex-col gap-y-2">
          <div>
            <h2 className="text-2xl md:text-4xl text-start font-semibold">
              {bookTitle}
            </h2>
          </div>
          <div className="text-xl">
            <p>{authorName}</p>
          </div>
          <div className="text-lg">
            <p>{category}</p>
          </div>
          <div>
            <p>{bookDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
