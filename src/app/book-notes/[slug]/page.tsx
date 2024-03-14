import { kebabCase } from "@/utils/kebabCase"
import { bookContents } from "@/utils/bookContents"

export default function BookPage({ params: { slug } }: any) {
  bookContents.forEach((book) => {
    const bookTitle = kebabCase(book.title)
    console.log(bookTitle === slug)
    if (bookTitle === slug) {
      return <div>{slug}XD</div>
    }
  })

  return <div>{slug}</div>
}
