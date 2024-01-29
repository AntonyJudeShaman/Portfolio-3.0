"use client";
import { Octokit } from "@octokit/core";
import Link from "next/link";
import { Card } from "@/components/cardeffect";
import { useEffect, useState, Fragment } from "react";
import { Article } from "@/components/article";
import NavMain from "@/components/nav";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink as L } from "lucide-react";

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

export default function ProjectPage() {
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [loader, setLoader] = useState(true);

  async function getProjects() {
    await octokit
      .request(`GET /user/repos`, {
        per_page: 100,
        affiliation: "owner",
        sort: "updated",
      })
      .then((res) => {
        setLoader(false);
        let result = res.data.map((project) => {
          return {
            ...project,
            emoji: String.fromCodePoint(
              0x1f600 + Math.floor(Math.random() * 80)
            ),
          };
        });

        setAllProjects(result);

        setProjects(
          result
            .filter(
              (project) =>
                !["cru", "article-summarizer", "Tri2Champ"].includes(
                  project.name
                )
            )
            .sort((a, b) => {
              const stargazersComparison =
                b.stargazers_count - a.stargazers_count;

              if (stargazersComparison !== 0) {
                return stargazersComparison;
              }

              return (
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
              );
            })
        );
      });
  }

  useEffect(() => {
    getProjects();
  }, []);

  const featured = allProjects.filter((project) => {
    return project.name.includes("To-Do-List-in-Next");
  });

  const top2 = allProjects.filter((project) => {
    return project.name.includes("article-summarizer");
  });
  const top3 = allProjects.filter((project) => project.name === "Tri2Champ");

  const projectData = {
    project: {
      topics: [
        "nextjs",
        "jwt-auth",
        "planetscale",
        "postgresql",
        "vercel",
        "prisma",
        "firebase",
        "oauth",
        "typescript",
        "structured-data",
        "seo",
        "server-side-rendering",
      ],
    },
  };

  function LoadingSkeleton() {
    return (
      <>
        <div className="h-90 cursor-not-allowed border border-zinc-600 rounded-xl">
          <Skeleton className="w-full h-70" />

          <div className="relative flex-col flex justify-center w-full h-full cursor-not-allowed p-4 md:p-8">
            <div className="flex items-center justify-between gap-2">
              <Skeleton className="w-20 h-6" />
              <Skeleton className="w-6 h-6 rounded-full" />
            </div>

            <h2 className="mt-4 text-3xl font-bold animate-pulse dark:text-gray-300 text-gray-600 h-6 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="mt-4 leading-8  animate-pulse text-gray-400 h-20 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="relative z-10 mt-6 flex flex-wrap text-sm font-medium text-gray-500 dark:text-gray-400">
              <Skeleton className="w-16 h-6 mr-2 mb-1" />
              <Skeleton className="w-16 h-6 mr-2 mb-1" />
              <Skeleton className="w-16 h-6 mr-2 mb-1" />
              <Skeleton className="w-16 h-6 mr-2 mb-1" />
            </div>
          </div>
        </div>
      </>
    );
  }

  function ArticleSkeleton() {
    return (
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 cursor-not-allowed">
        <article className="p-4 md:p-8 border border-zinc-600 rounded-xl">
          <div className="flex justify-between gap-2 items-center">
            <Skeleton className="w-20 h-6" />
            <Skeleton className="w-6 h-6" />
          </div>
          <Skeleton className="mt-2 text-xl h-6 bg-gray-200 dark:bg-gray-700 rounded" />
          <Skeleton className="mt-4 h-20 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="flex flex-wrap mt-6">
            {[...Array(3)].map((_, index) => (
              <Skeleton
                key={index}
                className="my-1 mr-2 px-3 py-1 inline-flex items-center rounded-full bg-slate-300 text-gray-800 dark:bg-slate-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700"
              />
            ))}
          </div>
        </article>

        <article className="p-4 md:p-8 border border-zinc-600 rounded-xl">
          <div className="flex justify-between gap-2 items-center">
            <Skeleton className="w-20 h-6" />
            <Skeleton className="w-6 h-6" />
          </div>
          <Skeleton className="mt-2 text-xl h-6 bg-gray-200 dark:bg-gray-700 rounded" />
          <Skeleton className="mt-4 h-20 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="flex flex-wrap mt-6">
            {[...Array(3)].map((_, index) => (
              <Skeleton
                key={index}
                className="my-1 mr-2 px-3 py-1 inline-flex items-center rounded-full bg-slate-300 text-gray-800 dark:bg-slate-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700"
              />
            ))}
          </div>
        </article>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col md:-mt-0 z-30 mt-0 -ml-4 md:ml-6 max-w-screen">
        <NavMain />
      </div>
      <div className="" style={{ zIndex: -99 }}>
        <div className="relative pb-16 pl-0 pr-0 md:pl-6 md:pr-16">
          <div className="px-6 pt-4 md:pl-5 space-y-8 lg:px- md:space-y-16">
            <div className="mx-auto lg:mx-0">
              <p className="mt-4 poppins dark:text-zinc-400 text-lg text-zinc-500 font-pops">
                Showcasing a blend of academic prowess and personal passion in
                every project, I navigate the intersection of student life and
                creative exploration.
              </p>

              <p className="mt-4 poppins dark:text-zinc-400 text-lg text-zinc-500 font-pops">
                These are my project repositories fetched using Github API
              </p>
              <div className=" mt-6 h-px dark:bg-zinc-400 bg-zinc-300" />
            </div>
            <div className="grid grid-cols-1 gap-8 mx-auto w-full lg:grid-cols-2 ">
              {loader ? (
                <>
                  {[...Array(2)].map((_, index) => (
                    <LoadingSkeleton key={index} />
                  ))}
                  {[...Array(10)].map((_, index) => (
                    <ArticleSkeleton key={index} />
                  ))}
                </>
              ) : (
                // my featured project is a private repo and cannot make it public, so its hardcoded.
                featured.map((project) => (
                  <Card key={project.name}>
                    <Link
                      href="https://www.bindarchitects.com/"
                      target="_blank"
                    >
                      <article className="relative  group flex-col flex justify-center w-full h-full p-6 md:p-8">
                        <div className="flex items-center justify-between gap-2">
                          <div className="text-sm z-30 text-zinc-900 poppins dark:text-zinc-100">
                            <time>November 28, 2023</time>
                          </div>

                          <span className="dark:text-zinc-500 text-zinc-600 text-xl  flex items-center gap-1">
                            {String.fromCodePoint(
                              0x1f600 + Math.floor(Math.random() * 80)
                            )}
                          </span>
                        </div>

                        <div className="flex flex-row justify-between items-center">
                          <h2
                            id="project-post"
                            className="mt-4 text-3xl z-30 font-bold duration-1000 dark:text-zinc-100 dark:group-hover:text-white text-zinc-900 group-hover:text-black sm:text-4xl md:text-5xl font-display"
                          >
                            Bind Architects
                          </h2>
                          {/* {project?.homepage.length > 0 && ( */}
                          <Link
                            href="https://bindarchitects.com/"
                            target="_blank"
                            className="hidden flex z-30 items-center justify-center hover:text-blue-400 text-blue-700 group-hover:block"
                          >
                            <L size={28} />
                          </Link>
                          {/* )} */}
                        </div>

                        <p className="mt-4 leading-8 dmsans duration-1000 text-zinc-600 group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-300">
                          {/* {featured.description} */}
                          Crafted a sleek website with a dark-themed UI using
                          Nextjs and Tailwind CSS, featuring secure admin login
                          for project management. The Projects page boasts
                          scrollable cards for elegant project display, while
                          the Contact page includes a business description and a
                          functional contact form. A seamless blend of design
                          and functionality for efficient project management and
                          client interaction.
                        </p>
                        <p className="relative z-30 mt-6 flex flex-wrap text-sm font-medium text-gray-500 dark:text-gray-400">
                          {/* {featured?.topics?.map((topic, index) => ( */}
                          {projectData?.project?.topics?.map((topic, index) => (
                            <span
                              key={index}
                              className="my-1 hover:opacity-70 poppins mr-2 px-3 py-1 inline-flex items-center rounded-full bg-slate-300 text-gray-800 dark:bg-slate-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700"
                            >
                              <svg
                                className="-ml-0.5 mr-1.5 h-2 w-2 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 8 8"
                              >
                                <circle cx={4} cy={4} r={3} />
                              </svg>
                              {topic}
                            </span>
                          ))}
                          {/* ))} */}
                        </p>
                      </article>
                    </Link>
                  </Card>
                ))
              )}
              <div className="flex flex-col w-full gap-8 mx-auto border-t dark:border-gray-900/10 border-gray-100/10 lg:mx-0 lg:border-t-0 ">
                {[top2, top3]
                  .flat()
                  .filter((project) => project)
                  .map((project) => (
                    <Link href={`${project.html_url}`}>
                      <Card key={project.name}>
                        <Article project={project} />
                      </Card>
                    </Link>
                  ))}
              </div>
            </div>
            <div className="hidden w-full h-px md:block bg-zinc-200 dark:bg-zinc-800" />
            <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
              <div className="grid grid-cols-1 mt-10 gap-4">
                {projects
                  .filter((_, i) => i % 3 === 0)
                  .map((project) => (
                    <Card>
                      <Article project={project} />
                    </Card>
                  ))}
              </div>
              <div className="grid grid-cols-1 gap-4">
                {projects
                  .filter((_, i) => i % 3 === 1)
                  .map((project) => (
                    <Card>
                      <Article project={project} />
                    </Card>
                  ))}
              </div>
              <div className="grid grid-cols-1 mt-10 gap-4">
                {projects
                  .filter((_, i) => i % 3 === 2)
                  .map((project) => (
                    <Card>
                      <Article project={project} />
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
