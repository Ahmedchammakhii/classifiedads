import React, { useEffect, useState } from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import './search.css'
import axios from 'axios';
const searchbar = (props) => {
  
    const [open, setOpen] = useState(false);
  const [categories , setCat]=useState([])

    const handleClick = () => {
      setOpen(!open);
    };
  
  useEffect(()=> {
    axios.get("http://127.0.0.1:3000/api/ads/cat").then (res=>{setCat(res.data.map(el=>el.name))})
  })
  return (
    <div className='searchbar' style={{display:"grid",alignItems:"center",justifyItems:"center"}}>
      <div className="list" style={{width:"30%",backgroundColor:"grey",justifySelf:"center"}}>
         <List
      sx={{ width: '100%', bgcolor: 'white',justifySelf:"center" }}
      component="nav">
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Select Category" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
      <List  component="div" disablePadding>
          <ListItemButton onClick={e=>{props.setSelected(0);setOpen(current=>!current)}} sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText  primary={"All"} />
          </ListItemButton>
          </List>
      {categories.map((cat,id)=><> <List  component="div" disablePadding>
          <ListItemButton onClick={e=>{props.setSelected(id+1);setOpen(current=>!current)}} sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText  primary={cat} />
          </ListItemButton>
          
        </List></>)}
      </Collapse>
    </List>
    </div>
    </div>
  )
}

export default searchbar
