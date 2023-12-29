"use client";
import { format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import NavMain from "@/components/nav";
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";

const BlogLayout = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  const Content = getMDXComponent(blog.body.code);

  return (
    <div className="flex flex-col  ">
      <div className="flex flex-col pt-12 pb-12 max-w-[55rem] mx-auto">
        <article className="">
          <div className="mb-6">
            <time dateTime={blog.date} className="text-sm">
              {format(parseISO(blog.date), "LLLL d, yyyy")}
            </time>
            <h1 className="text-4xl mb-4 font-bold mt-2 text-blue-700 dark:text-blue-400">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4">By
              <Image src="/images/my_photo.png" width={40} className="bg-gray-600 rounded-full" height={30} alt={blog.title} />
            </div>{" "}
          </div>
          <MDXProvider components={{ Content }}>
            <Content />
          </MDXProvider>
        </article>
      </div>
    </div>
  );
};

export default BlogLayout;
