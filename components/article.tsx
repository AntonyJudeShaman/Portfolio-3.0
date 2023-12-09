import Link from "next/link";
import { ExternalLink as L } from "lucide-react";
import { Card } from "./cardeffect";

export const Article = ({ project }: { project: any }) => {
  return (
    <Link href={`${project.html_url}`} target="_blank">
        <article className="p-6 md:p-8">
          <div className="flex justify-between gap-2 items-center">
            <span className="text-xs poppins duration-1000 text-slate-700 font-sans group-hover:text-black group-hover:border-zinc-800 dark:text-slate-200 dark:group-hover:text-white dark:group-hover:border-zinc-200 drop-shadow-orange">
              {project.created_at ? (
                <time dateTime={new Date(project.created_at).toISOString()}>
                  {Intl.DateTimeFormat(undefined, {
                    dateStyle: "medium",
                  }).format(new Date(project.created_at))}
                </time>
              ) : (
                <span>{new Date().toISOString()}</span>
              )}
            </span>
            <span className="dark:text-zinc-500 text-zinc-600 text-xl  flex items-center gap-1">
              {project.emoji}
            </span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h2 className="z-20 mt-2 text-3xl md:text-4xl font-medium duration-1000 lg:text-3xl text-zinc-700 group-hover:text-black dark:text-gray-100 dark:group-hover:text-white font-display">
              {project?.name?.charAt(0)?.toUpperCase() +
                project?.name?.slice(1)}
            </h2>
            {project?.homepage?.length > 0 && (
              <Link
                href={project.homepage}
                target="_blank"
                className="hidden flex z-50 items-center justify-center hover:text-blue-400 text-blue-700 group-hover:block"
              >
                <L size={28} />
              </Link>
            )}
          </div>
          <p className="z-20 mt-4 dmsans leading-6 text-md  duration-1000 font-pops dark:text-zinc-400 dark:group-hover:text-zinc-200 text-zinc-600 group-hover:text-zinc-900">
            {project.description}
          </p>
          <p className="relative poppins z-10 mt-6 flex flex-wrap text-sm font-medium text-gray-500 dark:text-gray-400">
            {project?.topics?.map((topic: [], index: number) => (
              <span
                key={index}
                className="my-1 hover:opacity-70 mr-2 px-3 py-1 inline-flex items-center rounded-full bg-slate-300 text-gray-800 dark:bg-slate-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700"
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
          </p>
        </article>
    </Link>
  );
};
