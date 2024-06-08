import React, { useState, useEffect } from "react";
import service from "../appwrite/config";
import { Container, PostCard, blank } from "../components";
import { ImSpinner2 } from "react-icons/im";
import { Link } from "react-router-dom";

const AllPosts = () => {
  const [loader, setLoader] = useState(false);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setLoader(true);
    service.getAllPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
        setLoader(false);
      }
    });
  }, []);
  return (
    <div className="w-full py-8 ">
      <Container>
        <div className="flex flex-wrap ">
          {loader ? (
            <ImSpinner2 className="animate-spin mx-auto text-7xl" />
          ) : posts.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center">
              <p className="text-2xl font-bold mb-8">
                No posts available. Click{" "}
                <Link to="/add-post" className="text-blue-500 ">
                  here
                </Link>{" "}
                to add a new post.
              </p>
              <img
                src={blank}
                className="w-3/4 cursor-pointer hover:scale-95 duration-300 ease-in-out"
                alt=""
              />
            </div>
          ) : (
            posts.map((post) => (
              <div
                key={post.$id}
                className=" p-2 w-full sm:w-1/2 md:w-1/3  lg:w-1/4"
              >
                <PostCard {...post} />
              </div>
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
