import { kebabCase } from "./kebabCase"

export const book = (title) => `/#/book-notes/${kebabCase(title)}/`
export const bookImg = (title) => `/images/books/${kebabCase(title)}.jpg`

export const handleNavHashLink = (title) => `/#${kebabCase(title)}`
export const handleNavLink = (title) => `/${kebabCase(title)}`
