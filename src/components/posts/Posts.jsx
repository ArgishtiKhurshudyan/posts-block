import * as React from 'react';
import "./posts.scss"
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import {Delete} from "@mui/icons-material";

export default function DataGridDemo() {
  const [data, setData] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);

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
      type: "number",
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'delete',
      headerName: 'Delete',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: () => <Delete style={{cursor: "pointer", color:"red"}} onClick={() => {
        const selectedIDs = new Set(selectionModel);
        setData((data) => data.filter((x) => !selectedIDs.has(x.id)));
      }
      }/>
    },
  ]

  return (
    <div className="post-table">
      <div className="post-items">
        <Box sx={{height: 400, width: '800px'}}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={4}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{newEditingApi: true}}
            onSelectionModelChange={(ids) => {
              setSelectionModel(ids);
            }}
          />
        </Box>
      </div>
    </div>
  );
}