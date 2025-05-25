import React, {useEffect, useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {Link} from "react-router-dom";
const BlogAll = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    fetchAPI();
  }, []);
  console.log(data);
  return (
    <>
      <h4>Blog Detail</h4>
      <ListGroup>
        {data.map((item, index) => (
          <ListGroup.Item key={index}>
            <Link to={`/blog/${item.id}`}>{item.title}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default BlogAll;
