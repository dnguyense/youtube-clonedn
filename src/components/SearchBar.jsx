import React from 'react';
import { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper} from "@mui/material";
import IconButton from '@mui/material/IconButton'
import {Search} from "@mui/icons-material";
function SearchBar() {
  return (
    <Paper
        component="form"
        onSubmit={() =>{}}
        sx ={{borderRadius: 20, boder: '1px solid #e3e3e3e', pl: 2, boxShadow:"none", mr: {sm:5} }}
    >
    <input className="search-bar" placeholder="Search..." type="text" value="" onChange={() =>{}} />
    <IconButton type="submit" sx={{p: "10px", color: "red" }} >
      <Search />
    </IconButton>
    </Paper>
  )
}

export default SearchBar