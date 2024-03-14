import { GetStaticPaths, GetStaticProps } from "next"
import { kebabCase } from "@/utils/kebabCase"
import { bookContents } from "@/../content/bookContents"

export default function BookPage({ book }: { book: any }) {
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      {/* Add more book details here */}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = bookContents.map((book) => ({
    params: { slug: kebabCase(book.title) },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug
  const book = bookContents.find((book) => kebabCase(book.title) === slug)
  console.log(bookContents.find((book) => kebabCase(book.title) === slug))

  if (!book) {
    return {
      notFound: true,
    }
  }

  return {
    props: { book },
  }
}
