import './add.scss'
import { GridColDef } from '@mui/x-data-grid'
import { FC, Dispatch, SetStateAction, FormEvent, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface IAddProps {
  slug: string
  columns: GridColDef[]
  setOpen: Dispatch<SetStateAction<boolean>>,
  userRows?: object[]
}

type FormInputType = HTMLInputElement | HTMLSelectElement


const Add: FC<IAddProps> = ({ slug, columns, setOpen, userRows }) => {
  const [formData, setFormData] = useState({
    id: '',
    img: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    createdAt: '',
    verified: false,
  })

  const handleInputChange = (event: FormEvent<FormInputType>) => {
    const target = event.target as FormInputType
    const { value, name } = target

    const finalValue = target.tagName === 'SELECT'
      ? value === 'true'
      : value

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: finalValue,
    }))
  }

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`http://localhost:8800/api/${slug}s`, {
        method: 'post',
        headers: {
          Accept: 'application/json', 'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData, id: userRows && userRows.length + 1,
        }),
      })
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [`all${slug}s`] })
    },
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate()
    setOpen(false)
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
              <div className="item" key={column.field}>
                <label htmlFor={column.field}>{column.headerName}</label>
                {column.type === 'boolean' ? (
                  <select
                    name={column.field}
                    id={column.field}
                    onChange={handleInputChange}
                    value={String(formData[column.field as keyof typeof formData])}
                  >
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                ) : (
                  <input
                    type={column.type === 'string' ? 'text' : column.type}
                    onChange={handleInputChange}
                    name={column.field}
                    id={column.field}
                    value={String(formData[column.field as keyof typeof formData])}
                  />
                )}
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
