import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const BlogDetail = () => {
  const params = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPost(data.body);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [params.id]);
  console.log(post);

  return (
    <>
      <h1>Blog Detail</h1>
      <div>{post}</div>
    </>
  );
};

export default BlogDetail;
