import React, { useState } from 'react'
import './productList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productData } from '../../dummyData';
import {Link} from 'react-router-dom'
export default function ProductList() {

  const [data, setData] = useState(productData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'Username', width: 130, renderCell: (params) => {
      return(
        <div className='productListItem'>
        <img className='productListImg' src={params.row.img} alt="" />
        {params.row.name}
        </div>
      )
    } },
    { field: 'stock', headerName: 'Stock', width: 150 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160
    },
    {
      field: 'action',
      headerName: 'Action',
      with: 150,
      renderCell: (params)=>{
        return(
          <>
          <Link to={"/product/"+ params.row.id}>          
          <button className='productListEdit'>Edit</button>
          </Link>
          <DeleteOutline className='productListDelete' onClick={()=> handleDelete(params.row.id)}/>
          
          </>
        )
      }
    }
  ];

  return (
    <div className='productList'>
        <DataGrid
      rows={data}
      columns={columns}
      pageSize={2}
      autoPageSize
      rowsPerPage={5}
      checkboxSelection
      disableRowSelectionOnClick
      />
      
    </div>
  )
}
