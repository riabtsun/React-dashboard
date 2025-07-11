import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { GridToolbar } from '@mui/x-data-grid/internals'
import './dataTable.scss'
import { FC } from 'react'
import { Link } from 'react-router'

interface IDataTableProps {
  columns: GridColDef[]
  rows: object[]
  slug: string
}

const handleDelete = (id: number) => {
  console.log(id)
}

const DataTable: FC<IDataTableProps> = ({ columns, rows, slug }) => {
  const actionColumn: GridColDef = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${slug}/${params.row.id}`}>
            <img src="/view.svg" alt="view" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="delete" />
          </div>
        </div>
      )
    },
  }
  return (
    <div className="dataTable">
      <DataGrid
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        showToolbar={true}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable
