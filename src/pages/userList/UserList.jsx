import React, { useState } from 'react'
import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { userData } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function UserList() {

  const [data, setData] = useState(userData)

  const handleDelete = (id) => {
    setData(data.filter(item =>item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'Username', width: 130, renderCell: (params) => {
      return(
        <div className='userListUser'>
        <img className='userListImg' src={params.row.avatar} alt="" />
        {params.row.userName}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 150 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160
    },
    {
      field: 'action',
      headerName: 'Action',
      with: 150,
      renderCell: (params)=>{
        return(
          <>
          <Link to={"/user/"+ params.row.id}>          
          <button className='userListEdit'>Edit</button>
          </Link>
          <DeleteOutline className='userListDelete' onClick={()=> handleDelete(params.row.id)}/>
          
          </>
        )
      }
    }
  ];
  

  return (
    <div className='userList'>
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
