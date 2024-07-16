import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium uppercase rounded-full hover:text-purple-700  text-purple-600"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
