import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the Blog',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the Blog',
      required: true,
    },
    meta: {
      type: 'string',
      description: 'The meta data of the Blog',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'blogs',
  documentTypes: [Blog],
})
