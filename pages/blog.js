import Link from "next/link";
import React from "react";
import Blog from "../component/Blog/Blog";

const blog = () => {
  return (
    <div>
      <h1> This is main blog page</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "400px",
          columnGap: "20px",
          margin: "30px",
        }}
      >
        <Blog blog={"blog1"}></Blog>
        <Blog blog={"blog2"}></Blog>
        <Blog blog={"blog3"}></Blog>
      </div>
    </div>
  );
};

export default blog;
