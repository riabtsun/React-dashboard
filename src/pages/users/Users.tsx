import DataTable from '../../components/dataTable/DataTable.tsx'
import Add from '../../components/add/Add.tsx'
import { useState } from 'react'
import { GridColDef } from '@mui/x-data-grid'
import { useQuery } from '@tanstack/react-query'
import './users.scss'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => {
      return (
        <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <img
            src={params.row.img || '/noavatar.png'}
            alt=""
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </div>
      )
    },
  },
  {
    field: 'firstName',
    type: 'string',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    type: 'string',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'email',
    type: 'string',
    headerName: 'Email',
    width: 200,
  },
  {
    field: 'phone',
    type: 'string',
    headerName: 'Phone',
    width: 200,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 200,
    type: 'string',
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 150,
    type: 'boolean',
  },
]

const Users = () => {
  const [open, setOpen] = useState<boolean>(false)

  const { isLoading, data } = useQuery({
    queryKey: ['allusers'],
    queryFn: async () => {
      return await fetch('http://localhost:8800/api/users').then((res) => res.json())
    },
  })
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add new user</button>
      </div>
      {isLoading ? 'Loading...' : <DataTable slug="users" columns={columns} rows={data} />}
      {open && <Add slug="user" columns={columns} setOpen={setOpen} userRows={data} />}
    </div>
  )
}

export default Users
