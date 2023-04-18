import React from 'react'
import {Stack} from "@mui/material"
import {categories} from "../utils/constaints"

const selectedCategory = "New";

const SideBar = () => {
  <Stack
    direction="row"
    sx= {{overflowY: "auto", height: {sx: "auto", md: "95%"}, flexDirection: {md: "column"}}}
    >
    {categories.map((category) =>{
     <button className="category-btn" style={{background: category.name === selectedCategory ? "red" : "white"}}>
        <span>{category.icon}</span>
        <span>{category.name}</span>
     </button>   
    })}
  </Stack>
}

export default SideBar