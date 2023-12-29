import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlogs, Blog } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { Card } from "@/components/cardeffect";
import BlogHead from "@/components/blog-head";
import NavMain from "@/components/nav";
import styles from "@/app/page.module.css";
import { Gradient } from "@/components/gradient";
import SiteFooter from "@/components/site-footer";

function BlogCard(blog: Blog) {
  const Content = getMDXComponent(blog.body.code);

  return (
    <Card key={blog._id}>
      <Link href={blog.url}>
        <div className="mb-8 bg-zinc-50 hover:bg-zinc-100/90 dark:bg-slate-900 border border-gray-300 dark:border-blue-900 dark:hover:bg-slate-900/70 p-6 rounded-md shadow-lg h-full">
          <h2 className="text-3xl font-bold mb-4">
            <p className="text-blue-700 hover:text-blue-900">{blog.title}</p>
          </h2>
          <time
            dateTime={blog.date}
            className="block mb-4 text-muted-foreground text-md "
          >
            {format(parseISO(blog.date), "LLLL d, yyyy")}
          </time>
          <div className="text-md overflow-hidden">
            <Content />
          </div>
        </div>
      </Link>
    </Card>
  );
}

export default function Home() {
  const blogs = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="2xl:mx-auto">
      <title>Blogs | Antony Jude Shaman</title>
      <div className="pl-0 md:pl-6 overflow-x-hidden">
        <div className=" max-w-screen overflow-x-hidden">
          <Gradient className={styles.backgroundGradient} conic />
        </div>
        <BlogHead />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto gap-6"></div>

      <div className="md:-ml-12">
        <SiteFooter />
      </div>
    </div>
  );
}
