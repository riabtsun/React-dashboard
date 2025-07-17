export type ListItem = {
  id: number
  title: string
  url: string
  icon: string
}

export type Menu = {
  id: number
  title: string
  listItems: ListItem[]
}

export type UserDeal = {
  id: number
  img: string
  username: string
  email: string
  amount: string
}

export type Product = {
  id: number
  img: string
  title: string
  color: string
  producer: string
  price: string
  createdAt: string
  inStock?: boolean
}
