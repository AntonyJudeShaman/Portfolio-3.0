import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center justify-center lg:grid-cols-2">
        <div className="text-md mx-auto max-w-2xl p-6 leading-6 text-black/70  md:max-w-3xl md:p-0 md:text-2xl md:leading-10 lg:max-w-3xl dark:text-white/70">
          <div className="dmsans mx-auto max-w-full text-lg leading-6 md:text-left md:text-2xl md:leading-10">
            <div className="max-w-xl rounded-md">
              <h2 className="font-display mb-4 text-4xl text-purple-500 dark:text-teal-500">
                Oops! The Magic Couldn't Find That Page.
              </h2>
              <p className="mb-4 text-xl">
                It seems the magical forces couldn't locate the page you're looking for. The wizard
                is diligently watching the computer, trying to figure it out!
              </p>
              <p className="mb-4 text-xl">
                While the wizard works their magic, you can navigate back to the home page.
              </p>
              <Link href="/">
                <button className='bg-white text-black rounded-xl hover:bg-white/90 p-3 font-pops text-sm'>Go back home</button>
              </Link>
            </div>
          </div>
        </div>
        <Image
          src="/wizard.png"
          height={700}
          width={700}
          className="mx-auto mt-6 hidden overflow-hidden rounded-full pl-10 md:block"
          alt="wizard"
        />
        <Image
          src="/wizard.png"
          height={500}
          width={500}
          className="mx-auto block overflow-hidden p-6 pt-12 md:hidden"
          alt="wizard"
        />
      </div>
    </div>
  )
}
