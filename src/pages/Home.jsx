import React from "react";
import { useState, useEffect } from "react";
import service from "../appwrite/config";
import { Container, PostCard, pc, mobile } from "../components";
import { Link } from "react-router-dom";
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service.getAllPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full flex flex-col   text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full flex flex-col items-center justify-center">
              <Link
                to="/login"
                className="text-2xl font-bold hover:text-gray-500 mb-8"
              >
                Please Login to your account to read posts
              </Link>
              <div className="flex items-center justify-center ">
                <img
                  src={mobile}
                  className="w-3/4 cursor-pointer hover:scale-95 duration-300 ease-in-out"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
