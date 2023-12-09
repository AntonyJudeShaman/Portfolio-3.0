"use client"
import { format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import NavMain from "@/components/nav";
import { MDXProvider } from "@mdx-js/react";

const BlogLayout = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  const Content = getMDXComponent(blog.body.code);

  return (
    <div className="flex flex-col md:-mt-0 z-60 mt-0 -ml-6 md:ml-0 md:min-h-screen max-w-screen bg-gray-100 dark:bg-gray-800">
      <NavMain />
      <div className="flex flex-col mt-12 md:mt-16 mx-auto items-center min-h-full">
        <article className="p-8 max-w-3xl border hover:bg-gray-200/90 border-gray-300 dark:border-blue-900 dark:hover:bg-slate-900/70 bg-white dark:bg-slate-900 shadow-md rounded-md">
          <div className="mb-6 text-center">
            <time dateTime={blog.date} className="text-sm text-gray-600">
              {format(parseISO(blog.date), "LLLL d, yyyy")}
            </time>
            <h1 className="text-4xl font-bold mt-2 text-blue-700 dark:text-blue-400">
              {blog.title}
            </h1>
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
