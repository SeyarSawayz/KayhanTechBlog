import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../index";
import { BsSendFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="relative flex flex-col overflow-hidden  bg-[#020617]  text-white w-full px-16 py-5 pb-10">
      <div className="flex flex-wrap items-start  lg:gap-0 gap-5 lg:justify-between mb-10">
        <div>
          <ul className="flex flex-col gap-4">
            <Link>About</Link>
            <Link to={"/"} className="text-zinc-400">
              About
            </Link>
            <Link to={"/"} className="text-zinc-400">
              Services
            </Link>
            <Link to={"/"} className="text-zinc-400">
              Careers
            </Link>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            <Link>Account</Link>
            <Link to={"/"} className="text-zinc-400">
              Account
            </Link>
            <Link to={"/"} className="text-zinc-400">
              My tasks
            </Link>
            <Link to={"/"} className="text-zinc-400">
              Projects
            </Link>
            <Link to={"/"} className="text-zinc-400">
              Invite friends
            </Link>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            <Link>Contacts</Link>
            <Link to={"/"} className="text-zinc-400">
              +91 9704473043
            </Link>
            <Link to={"/"} className="text-zinc-400">
              sawayzseyar@gmail.com
            </Link>
            <Link to={"/"} className="text-zinc-400"></Link>
            <Link to={"/"} className="text-zinc-400"></Link>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            <Link>Subscribe</Link>
            <div className="my-3">
              <div className="bg-white flex w-full rounded-md">
                <input
                  type="text"
                  placeholder="Your email"
                  className="w-3/4 outline-none text-black placeholder:text-gray-500 rounded px-3 py-2 bg-transparent"
                />
                <div className="bg-[#7634D9] flex items-center justify-center w-1/4 rounded-r-md cursor-pointer hover:bg-blue-600">
                  <BsSendFill className="text-white" />
                </div>
              </div>
            </div>
            <Link to={"/"} className="text-zinc-400">
              Stay in touch
            </Link>
            <div className="flex items-start justify-start gap-2">
              <div className="w-10 h-10 bg-[#1E293B] rounded-md flex items-center justify-center">
                <a
                  href="https://www.facebook.com/KAYHANTECHNOLOGY/"
                  target="_blank"
                >
                  <FaFacebook className="text-xl" />
                </a>
              </div>

              <div className="w-10 h-10 bg-[#1E293B] rounded-md flex  items-center justify-center">
                <a
                  href="https://www.linkedin.com/in/seyar-sawayz-159119119/"
                  target="_blank"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>

              <div className="w-10 h-10 bg-[#1E293B] rounded-md flex items-center justify-center">
                <a href="https://twitter.com/seyarsawayz" target="_blank">
                  <BsTwitterX className="text-xl" />
                </a>
              </div>

              <div className="w-10 h-10 bg-[#1E293B] rounded-md flex items-center justify-center">
                <a href="https://github.com/seyarsawayz" target="_blank">
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center lg:gap-0 gap-5 lg:justify-between">
        <div>
          <Link to="/">
            <img src={logo} className="w-24" alt="" />
            <h1 className="text-[9px] font-bold text-center">Blog</h1>
          </Link>
        </div>
        <div className="text-center text=xl">
          <p className={` dark:text-[#e0e0e0] `}>
            &copy;2024 Seyar Sawayz. All rights reserved.
          </p>
          <p className={`text-sm mt-2 dark:text-[#e0e0e0] `}>
            <a
              href="https://kayhantech.netlify.app/"
              target="_blank"
              className="underline hover:text-zinc-100 dark:text-[#e0e0e0]"
            >
              Powered by KayhanTech Technologies
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
