import * as React from 'react';
import "./posts.scss"
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import {Delete, Person} from "@mui/icons-material";
import Profile from "../Profile";
import {Link} from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default function DataGridDemo({setSelectedItem}) {
  const [data, setData] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        throw new Error
      })
  }, [])

  const columns = [
    {field: 'id', headerName: 'ID', width: 90},
    {
      field: 'username',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'name',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 110,
      editable: true,

    },
    {
      field: 'phone',
      headerName: 'Phone',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      editable: true
    },
    {
      field: 'delete',
      headerName: 'Delete',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 90,
      renderCell: () => <Delete style={{cursor: "pointer", color: "red"}} onClick={() => {
        const selectedIDs = new Set(selectionModel);
        setData((data) => data.filter((x) => !selectedIDs.has(x.id)));
      }
      }/>
    },
    {
      field: 'profile',
      headerName: 'Profile',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 90,
      renderCell: (params) => (
        <Link to="/profile"><Person onClick={() => setSelectedItem(params.row)}/></Link>
      )
    },
  ]

  return (
    <>
      <div className="post-table" style={darkMode ? {backgroundColor: "#282828f7"} : {backgroundColor: "white"}}>
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
        <div className="post-items">
          <Box sx={{height: 400, width: '100%'}}>
            <DataGrid
              style={darkMode ? {color: "#747e83", backgroundColor: "#ededed"} : {color: "black"}}
              rows={data}
              columns={columns}
              pageSize={4}
              rowsPerPageOptions={[4]}
              checkboxSelection
              // disableSelectionOnClick
              experimentalFeatures={{newEditingApi: true}}
              onSelectionModelChange={(ids) => {
                setSelectionModel(ids);
              }}
            />
          </Box>
        </div>
      </div>
    </>
  );
}