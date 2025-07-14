import './add.scss'
import { GridColDef } from '@mui/x-data-grid'
import { FC, Dispatch, SetStateAction, FormEvent } from 'react'

interface IAddProps {
  slug: string
  columns: GridColDef[]
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Add: FC<IAddProps> = ({ slug, columns, setOpen }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add New {slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== 'id' && item.field !== 'img')
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type === 'string' ? 'text' : column.type} />
              </div>
            ))}
          <button type="submit" className="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Add
