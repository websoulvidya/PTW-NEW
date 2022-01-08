import React ,{useState} from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { ListItem, ListItemText, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { makeStyles } from '@mui/material';
import { Link } from 'react-router-dom';
import "./DrawerC.css";


// const useStyles = makeStyles(theme =>({
//     MenuIconContainer: {

//         FontSize:"2rem"
//     },
// }));



export const DrawerC = () => {

    const [openDrawer, setOpenDrawer]= useState(false);
    const [showdrop, setshowdrop]=useState(false);
    const [showlang, setshowlang]= useState(false);
    // const classes= useStyles();
    return (
        <>


        
        <Drawer open={openDrawer} onClose={()=> setOpenDrawer(false)}  PaperProps={{style:{marginTop:"3.5rem"}}}>

           
            <List style={{width:"100vh",height:"100vh",padding:"1rem",  color:"black"}} >
                {/* <ListItem  divider>
                    <ListItemText style={{fontSize:"4rem"}}>Services</ListItemText>
                    
                </ListItem> */}
                <ListItem divider>
                    <div className='mobile-header-drop-main' >
                    <div>
                    <p style={{color:"black"}} onClick={() => setshowdrop(!showdrop)} className='mobile-header-service'><b>SERVICES</b></p>
                    </div>
                  <div>
                  { showdrop && 
            <div className='mobile-header-dropdown'>
                   
                   <ul className='mobile-header-dropdown-list' >
                       {/* <h1>hello</h1> */}
                       <li><Link to="/artproduction" className='mobile-head-link' onClick={()=> setOpenDrawer(false)}><b>Art Production</b></Link></li>
                       <li ><Link to="/gamedevelopment" className='mobile-head-link'onClick={()=> setOpenDrawer(false)} ><b>Game Development</b></Link></li>
                       <li><Link to="/qualityassurance" className='mobile-head-link'onClick={()=> setOpenDrawer(false)}><b>Quality Assurance</b></Link></li>
                       <li><Link to="/playersupport" className='mobile-head-link'onClick={()=> setOpenDrawer(false)}><b>Player Support</b></Link> </li>
                       <li><Link to="/localization" className='mobile-head-link'onClick={()=> setOpenDrawer(false)}><b>Localization</b></Link></li>
                       <li><Link to="/localizationqa" className='mobile-head-link'onClick={()=> setOpenDrawer(false)}><b>Localization QA</b></Link></li>
                       <li><Link to="/voiceproduction" className='mobile-head-link'onClick={()=> setOpenDrawer(false)}><b>Voice Production</b></Link></li>
                       <li><Link to="/datacollection" className='mobile-head-link'onClick={()=> setOpenDrawer(false)}><b>Data Collection</b></Link></li>
                   </ul>
            </div>
              }

                  </div>

                    </div>
                  

                   

                </ListItem>
                <ListItem style={{textTransform:"uppercase"}} divider>
                    <ListItemText ><b>News&Events</b></ListItemText>
                </ListItem>
                <ListItem style={{textTransform:"uppercase"}}>
                    <ListItemText><b>Careers</b></ListItemText>
                </ListItem>
                <ListItem style={{textTransform:"uppercase"}} divider>
                    <ListItemText><b>lab</b></ListItemText>
                </ListItem>
                <ListItem style={{textTransform:"uppercase"}}divider>
                    <ListItemText><b>Contact & location</b></ListItemText>
                </ListItem>
                <ListItem style={{textTransform:"uppercase"}}divider>
                    <ListItemText><b>About us</b></ListItemText>
                </ListItem>
                <ListItem divider>
                    <div className='mobile-lang-head'>
                    <div>
                    <p onClick={() => setshowlang(!showlang)} style={{color:"black"}}><b>ENGLISH<i class='fas fa-angle-down'></i></b></p>
                    </div>
                    <div>
                    {
                        showlang && 
                        <div className='mobile-lang-main'>
                            <ul className='mobile-lang-sub'>
                                <li className='mobile-lang-link'>English</li>
                                <li className='mobile-lang-link'>Canadian French</li>
                                <li className='mobile-lang-link'>Japanese</li>
                                <li className='mobile-lang-link'>Korean</li>
                                <li className='mobile-lang-link'>Simplified Chinese</li>
                                <li className='mobile-lang-link'>Traditional Chinese</li>
                            </ul>
                            
                        </div>
                    }

                    </div>
                    </div>
                </ListItem>
            </List>
        
        </Drawer>
       <Typography style={{marginLeft:"40%", fontSize:"1.5rem"}}><b> PTW</b></Typography>
        <IconButton  onClick={()=> setOpenDrawer(!openDrawer)} style={{marginLeft:"29%", backgroundColor:"orange" ,color:"white",borderRadius:"0rem" ,padding:"1rem"}}>
            {openDrawer ?"x":<MenuIcon />}
        </IconButton>
        
        </>
    )
}

export default DrawerC;