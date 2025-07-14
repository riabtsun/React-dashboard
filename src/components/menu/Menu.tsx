import { Link } from 'react-router'
import { menuItems } from '../../mocks/data.ts'
import './menu.scss'

const Menu = () => {
  return (
    <div className="menu">
      {menuItems.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} key={listItem.id} className="listItem">
              <img src={`/${listItem.icon}`} alt={listItem.title} />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu
