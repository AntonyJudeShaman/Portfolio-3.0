import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { BsArrowRight } from 'react-icons/bs'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 md:space-y-5"></div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-6">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time className="font-display text-purple-600" dateTime={date}>
                          {formatDate(date, siteMetadata.locale)}
                        </time>
                      </dd>
                    </dl>

                    <div className="group space-y-4 rounded-2xl duration-300 md:hover:bg-gray-200/60 dark:md:hover:bg-gray-800/40 xl:col-span-3">
                      <div className="space-y-6 p-0 md:p-6">
                        <Link href={`/blog/${slug}`}>
                          <div>
                            <h2 className="text-2xl font-bold leading-8">
                              <Link
                                href={`/blog/${slug}`}
                                className="font-display  text-gray-900 hover:text-purple-600 dark:text-gray-100 dark:hover:text-purple-600"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="mb:mb-1 mb-4 mt-4 flex flex-wrap md:mt-1">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </Link>
                      </div>
                      <div className="group pb-0 pl-0 text-base  font-medium leading-6 md:pb-6 md:pl-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="font-pops group flex flex-row text-purple-600 hover:opacity-80"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more{' '}
                          <BsArrowRight className="ml-2 h-6 w-6 duration-300 group-hover:translate-x-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="group flex justify-end text-base font-medium leading-6">
          <Link href="/blog" className="group flex flex-row text-purple-600" aria-label="All posts">
            All Posts{' '}
            <BsArrowRight className="ml-2 h-6 w-6 duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      )}
    </>
  )
}
