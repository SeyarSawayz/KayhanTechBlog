import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import fileService from "../appwrite/fileServices";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        fileService.deleteImage(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className=" py-8">
      <Container>
        <div className="w-full flex lg:flex-row flex-col items-center shadow-2xl shadow-slate-300 border-2 border-[#020617] bg-[#1E293B] justify-between mb-4  rounded-xl overflow-hidden">
          <div className="w-full h-screen overflow-hidden">
            <img
              src={fileService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="w-full rounded-l-xl h-screen"
            />
          </div>

          <div className="flex  flex-wrap items-center justify-between h-screen  w-full">
            {isAuthor && (
              <div className="flex items-center justify-end p-3 h-14  w-full">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button
                    bgColor="bg-[#7634D9] text-white font-bold hover:text-black flex items-center justify-center gap-3"
                    className="mr-3"
                  >
                    Edit
                    <FaRegEdit />
                  </Button>
                </Link>
                <Button
                  bgColor="bg-[#7634D9] text-white font-bold hover:text-black flex items-center justify-center gap-3 "
                  onClick={deletePost}
                >
                  Delete
                  <MdOutlineDeleteOutline className="text-xl" />
                </Button>
              </div>
            )}
            <div className="w-full  h-screen p-4 overflow-y-scroll">
              <div className="w-full mb-6">
                <h1 className="text-2xl font-bold">{post.title}</h1>
              </div>
              <div className="browser-css pb-20">{parse(post.content)}</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}
