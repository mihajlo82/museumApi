import {useState, useContext} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TreeListStyle from './treeListData.module.css';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { MyMuseumContext } from '../../../context/MuseumContext';

const TreeListData = () => {
    const {myData, myActiveObject, myRightSideEmpty} = useContext(MyMuseumContext);
    const [activeObject, setActiveObject] = myActiveObject;
    const [isEmptyRightSide, setIsEmptyRightSide] = myRightSideEmpty;

    const [data, setData] = myData;
    const [open, setOpen] = useState(true);
    const [openAmericanWing, setOpenAmericanWing] = useState(false);
    const [openEuropeanWing, setOpenEuropeanWing] = useState(false);

    const clickItem = (item) => {
          setActiveObject(item);
          setIsEmptyRightSide(false)
      }

  return (
    <Grid className={TreeListStyle.treeListWrapp}>
        <Box>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                component="nav"
                aria-labelledby="nested-list-subheader">
            
                <ListItemButton onClick={()=>setOpen(!open)}>
                    <ListItemIcon> {open ? <ExpandLess /> : <KeyboardArrowRightIcon /> } </ListItemIcon>
                    <ListItemText primary="The Met collection" />
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => setOpenAmericanWing(!openAmericanWing)}>
                            <ListItemIcon>  {openAmericanWing ? <ExpandLess /> : <KeyboardArrowRightIcon /> } </ListItemIcon>
                            <ListItemText primary="The American wing" />
                        </ListItemButton>

                        <Collapse in={openAmericanWing} timeout="auto" unmountOnExit>
                            {data.map((item, index) =>{
                                    if(item.type === 1){
                                    return (
                                        <ListItemButton key={item.id} sx={{ pl: 12 }} onClick={()=>clickItem(item)}>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    )}
                                })}
                        </Collapse>

                        <ListItemButton sx={{ pl: 4 }} onClick={() => setOpenEuropeanWing(!openEuropeanWing)}>
                            <ListItemIcon>  {openEuropeanWing ? <ExpandLess /> : <KeyboardArrowRightIcon /> } </ListItemIcon>
                            <ListItemText primary="The European wing" />
                        </ListItemButton>

                        <Collapse in={openEuropeanWing} timeout="auto" unmountOnExit>
                            {data.map((item, index) =>{
                                if(item.type===2){
                                  return (
                                    <ListItemButton key={index} sx={{ pl: 12 }} onClick={()=>clickItem(item)}>
                                        <ListItemText primary={item.name}  />
                                    </ListItemButton>
                                )}
                            })}
                        </Collapse>

                    </List>
                </Collapse>
            </List>
        </Box>
    </Grid>
  )
}

export default TreeListData