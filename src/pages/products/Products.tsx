import { useState } from 'react'
import DataTable from '../../components/dataTable/DataTable.tsx'
import Add from '../../components/add/Add.tsx'
import { GridColDef } from '@mui/x-data-grid'
import { products } from '../../mocks/data.ts'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Image',
    width: 100,
    renderCell: (params) => {
      return (
        <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <img src={params.row.img || '/noavatar.png'} alt="" />
        </div>
      )
    },
  },
  {
    field: 'title',
    type: 'string',
    headerName: 'Title',
    width: 250,
  },
  {
    field: 'color',
    type: 'string',
    headerName: 'Color',
    width: 150,
  },
  {
    field: 'price',
    type: 'string',
    headerName: 'Price',
    width: 200,
  },
  {
    field: 'producer',
    headerName: 'Producer',
    type: 'string',
    width: 200,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 200,
    type: 'string',
  },
  {
    field: 'inStock',
    headerName: 'In Stock',
    width: 150,
    type: 'boolean',
  },
]

const Products = ({}) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="users">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add new products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add slug="products" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Products
