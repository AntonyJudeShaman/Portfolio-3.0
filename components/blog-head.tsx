"use client";
import Image from "next/image";
import React from "react";
import coverImage from "@/public/images/tower.jpg";
import NavMain from "./nav";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlogs, Blog } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { ChevronRight } from "lucide-react";

const CardSkeleton = () => (
  <div className="bg-transparent group xl:max-w-2xl lg:max-w-xl md:max-w-[50rem] p-6 shadow-lg h-full cursor-not-allowed">
    <p className="dark:text-white mb-3 dark:hover:text-white/90 text-black hover:text-black/90 font-display">
      Coming Soon...
    </p>
    <div className="h-4 w-1/4 mb-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
    <div className="h-6 w-1/2 mb-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
    <div className="h-16 w-full bg-gray-300 dark:bg-gray-700 rounded mt-4"></div>
    <p className="flex flex-row max-w-[9rem] hover:translate-x-[2px] rounded text-sky-400 mt-5 hover:bg-slate-auto duration-300 text-xl font-display">
      <ChevronRight className=" group-hover:translate-x-[2px] duration-300" />{" "}
      Read Article
    </p>
  </div>
);

function BlogCard(blog: Blog) {
  const Content = getMDXComponent(blog.body.code);

  return (
    <>
      <Link href={blog.url} style={{ zIndex: 8 }}>
        <div className="dark:bg-transparent  group xl:max-w-2xl lg:max-w-xl md:max-w-[50rem] dark:hover:bg-black/30 dark:hover:bg-opacity-80 hover:bg-white/30 duration-500  p-6 shadow-lg h-full">
          <time
            dateTime={blog.date}
            className="block mb-4 dark:text-[#00e5ff] text-blue-500 font-pops text-sm"
          >
            {format(parseISO(blog.date), "LLLL d, yyyy")}
          </time>
          <h2 className="text-3xl font-bold mb-4">
            <p className="dark:text-white dark:hover:text-white/90 text-black hover:text-black/90 font-display">
              {blog.title}
            </p>
          </h2>
          <div className="text-md font-sans overflow-hidden">{blog.meta}</div>
          <p className="flex flex-row max-w-[9rem]rounded text-sky-500 hover:text-sky-700 mt-5 hover:bg-slate-auto duration-300 text-xl font-display">
            <ChevronRight className=" group-hover:translate-x-[2px] duration-300" />{" "}
            Read Article
          </p>
        </div>
      </Link>
      <div className="border-t border-gray-500 my-4"></div>
      <CardSkeleton />
      <div className="border-t border-gray-500 my-4"></div>
      <CardSkeleton /> <br />
    </>
  );
}

function BlogHead() {
  const blogs = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="flex flex-col md:-mt-0 z-60 mt-0 -ml-6 md:ml-0 md:min-h-screen  max-w-screen">
      <NavMain />
      <div className="flex flex-row">
        <div className=" flex justify-center ml-5 sm:ml-5 mt-2 md:mt-12 lg:mt-0 2xl:mt-0 xl:mt-0 2xl:l-10 xl:-ml-5 lg:-ml-5 md:-ml-5 mx-auto lg:flex-row flex-col md:m-0 m-6 text-left">
          <div className="block lg:hidden">
            <p
              className="md:text-4xl sm:text-4xl z-60 text-3xl mb-4 ml-6 md:ml-10 mx-auto font-display duration-200"
              style={{ zIndex: 10 }}
            >
              Featured Article
            </p>
            <div
              style={{ zIndex: 10 }}
              className="md:ml-8 mx-auto  md:max-w-[600px] max-w-[500px] md:top-2/3 duration-200 sm:top-2/3 top-1/3 opacity-100 absolute transform -translate-y-1/2"
            >
              <Link href="#">
                <div
                  style={{ filter: "brightness(200%)" }}
                  className="dark:bg-transparent group duration-500 xl:mt-8 2xl:pt-10 lg:pt-5 xl:p-6 2xl:p-6 p-10 h-full"
                >
                  <time
                    dateTime=""
                    className="block mb-4 mt-32 sm:mt-10 md:mt-0 font-bold font-pops text-sm"
                  >
                    December 8, 2023
                  </time>
                  <h2 className="text-2xl font-bold mb-4">
                    <p className="dark:text-white dark:hover:text-white/90 text-black hover:text-black/90 font-display">
                      REST APIs with Next.js App Router and ORM
                    </p>
                  </h2>
                  <div className="text-sm overflow-hidden poppins font-sans">
                    Exploring the vast world of web development opens doors to
                    exciting technologies and platforms that can shape your
                    digital universe. In this blog, we'll delve into a
                    captivating adventure with Next.js, Vercel, Firebase, and
                    Git. These tools...
                  </div>
                  <p className="flex flex-row max-w-[9rem] rounded text-sky-800 hover:text-sky-900 dark:text-sky-500 dark:hover:text-sky-700 mt-5 hover:bg-slate-auto duration-300 text-xl item font-display">
                    <ChevronRight className=" group-hover:translate-x-[2px] duration-300" />{" "}
                    Read Article
                  </p>
                </div>
              </Link>
            </div>
            <Image
              src={coverImage}
              priority
              alt="about cover image"
              className="hidden md:ml-10 md:block m-6 md:m-0 dark:opacity-40 opacity-40"
              width={700}
              height={300}
              style={{ zIndex: -1 }}
            />

            <Image
              src={coverImage}
              priority
              alt="about cover image"
              className="md:ml-10 md:hidden pr-10 sm:block xs:hidden m-6 dark:opacity-40 opacity-40"
              width={650}
              height={300}
              style={{ zIndex: -1 }}
            />
          </div>
          <div className="border-t border-gray-500 my-4"></div>
          <div className="grid md:grid-cols-1 mt-6 grid-cols-1 md:ml-4 xl:max-w-2xl lg:max-w-xl md:max-w-[50rem] mx-auto gap-6">
            {blogs.map((blog, idx) => (
              <BlogCard key={idx} {...blog} />
            ))}
          </div>
          <div className=" lg:block hidden" style={{ zIndex: 10 }}>
            <p className="text-6xl ml-10 dark:text-white/90 text-black -z-20 mt-8 font-display duration-200">
              Featured Article
            </p>
            <div
              style={{ filter: "brightness(200%)" }}
              className="ml-8 xl:max-w-[500px] 2xl:max-w-[600px] lg:max-w-[400px] duration-200  opacity-100 absolute 2xl:top-3/4 xl:top-3/4 lg:top-2/3 transform  -translate-y-1/2"
            >
              <Link href="#" style={{ zIndex: 10 }}>
                <div className=" group dark:bg-transparent dark:text-white text-black duration-500 xl:mt-8 2xl:pt-10 lg:pt-5 xl:p-6 2xl:p-6 p-4 h-full">
                  <time
                    dateTime=""
                    className="block mb-4 font-bold font-pops text-sm"
                  >
                    December 8, 2023
                  </time>
                  <h2 className="text-3xl font-bold mb-4 z-20">
                    <p className="dark:text-white  text-black hover:text-black/90 font-display">
                      REST APIs with Next.js App Router and ORM
                    </p>
                  </h2>
                  <div className="text-md overflow-hidden poppins z-30">
                    Exploring the vast world of web development opens doors to
                    exciting technologies and platforms that can shape your
                    digital universe. In this blog, we'll delve into a
                    captivating adventure with Next.js, Vercel, Firebase, and
                    Git. These tools...
                  </div>
                  <p className="flex flex-row max-w-[9rem]  rounded text-black hover:text-black/70 dark:text-sky-500 dark:hover:text-sky-700 mt-5 hover:bg-slate-auto duration-300 text-xl items-center font-display">
                    <ChevronRight className=" group-hover:translate-x-[2px] duration-300" />{" "}
                    Read Article
                  </p>
                </div>
              </Link>
            </div>
            <Image
              src={coverImage}
              priority
              alt="about cover image"
              className="2xl:block xl:hidden m-10 hidden dark:opacity-40 opacity-40 relative"
              width={700}
              height={600}
              style={{ zIndex: -1 }}
            />
            <Image
              src={coverImage}
              priority
              alt="about cover image"
              className="2xl:hidden xl:block m-10 hidden dark:opacity-40 opacity-40 relative"
              width={500}
              height={500}
              style={{ zIndex: -1 }}
            />

            <Image
              src={coverImage}
              priority
              alt="about cover image"
              className=" m-10 lg:block ml-6 pr-8 2xl:hidden xl:hidden dark:opacity-40 opacity-40 hidden"
              width={550}
              height={400}
              style={{ zIndex: -1 }}
            />
            <Image
              src={coverImage}
              priority
              alt="about cover image"
              className="md:mr-12 lg:mr-24 lg:hidden md:block dark:opacity-40 opacity-40 mt-10 2xl:hidden xl:hidden hidden"
              width={800}
              style={{ zIndex: -1 }}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHead;
