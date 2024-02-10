import { titleToDashed } from "./titleToDashed"

export const book = (title) => `/#/book-notes/${titleToDashed(title)}/`
export const bookImg = (title) => `/images/books/${titleToDashed(title)}.jpg`

export const handleNavHashLink = (title) => `/#${titleToDashed(title)}`
export const handleNavLink = (title) => `/${titleToDashed(title)}`
