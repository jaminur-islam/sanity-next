import Link from "next/link";
import React from "react";

const Blog = ({ blog }) => {
  return (
    <div>
      <div
        style={{
          margin: "20px",
          background: "green",
          height: "300px",
          padding: "50px",
        }}
      >
        <h1> {blog} </h1>
        <Link href="/blog-details">
          <a
            style={{
              color: "blue",
              fontWeight: "bold",
              textDecoration: "underLIne",
            }}
          >
            Details
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
