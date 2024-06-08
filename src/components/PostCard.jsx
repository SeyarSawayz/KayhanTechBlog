import React from "react";
import fileService from "../appwrite/fileServices";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-[#020617] rounded-xl min-h-96 hover:scale-95 duration-200 ease-in-out shadow-md shadow-slate-700 ">
        <div className="w-full justify-center mb-4">
          <img
            className="rounded-t-xl object-contain  "
            src={fileService.getFilePreview(featuredImage)}
            alt={title}
          />
          <h2 className="text-slate-400 text-xl px-3 mt-3">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
