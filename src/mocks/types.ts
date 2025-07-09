export interface ListItem {
  id: number
  title: string
  url: string
  icon: string
}

export interface IMenu {
  id: number
  title: string
  listItems: ListItem[]
}

export interface IUserDeal {
  id: number
  img: string
  username: string
  email: string
  amount: string
}
