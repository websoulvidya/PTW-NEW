import React,{useState} from 'react';
import "./Header.css";
import {AppBar,Toolbar,useMediaQuery,useTheme, Tabs, Tab, Button, MenuList} from '@mui/material';
import DrawerC from './DrawerC';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';


export const Header = () => {

    const theme= useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const [show, setshow]=useState(false);

    const handleOpenMenu= e=> {
        setAnchorEl(e.currentTarget)
    }
    const handleMenuClose= () => {
        setAnchorEl(null)
    }

    const isMatch= useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <AppBar color='primary' style={{height:"3.2rem"}} position='sticky' >
            <Toolbar>
            
            {isMatch ? <DrawerC />: (
                <>
                <p onClick={() => setshow(!show)} className='para-links' style={{marginLeft:"2rem", fontSize:"1rem",marginTop:"1rem" }}><b>SERVICES&nbsp;{show?"^":"v"}</b></p>
            <Tabs >
                

            
        
                <Tab style={{color:"white", marginLeft:"4rem"}} label="NEWS&EVENTS" component={Link} to={"/news"}/>

            
            
                <Tab style={{color:"white", marginLeft:"6rem"}} label="CAREERS" component={Link} to={"/careers"}/>

            
            
                <Tab style={{color:"white" ,marginLeft:"4rem", fontSize:"2rem"}}label="PTW" component={Link} to={"/"} />
            
                <Tab style={{color:"white",marginLeft:"2rem"}}label="LAB" component={Link} to={"/lab"} />


            
                <Tab style={{color:"white",marginLeft:"2rem"}} label="CONTACT&LOCATIONS" component={Link} to={"/contact"}/>

            
            
                <Tab style={{color:"white", marginLeft:"2rem", marginRight:"2rem"}} label="ABOUTS US" component={Link} to={"/about"}/>

            </Tabs>
            <Button variant='contained' className="english-button" aria-controls='menu' onMouseUp={handleOpenMenu} style={{backgroundColor:"#fd7e14", color:"white",height:"3.2rem",marginLeft:"2rem",textTransform:"capitalize",position:"relative",marginTop:"-1rem" }} >English<i class='fas fa-angle-down'></i></Button>
            </>
            )
            }
            </Toolbar>
           

            </AppBar>

            <Grid container>
            { show && 
            <div className='header-dropdown'>
                   
                   <ul className='header-dropdown-list'>
                       
                       <li><Link to="/artproduction" className='head-link'>Art Production</Link></li>
                       <li><Link to="/gamedevelopment" className='head-link'>Game Development</Link></li>
                       <li><Link to="/qualityassurance" className='head-link'>Quality Assurance</Link></li>
                       <li><Link to="/playersupport" className='head-link'>Player Support</Link> </li>
                       <li><Link to="/localization" className='head-link'>Localization</Link></li>
                       <li><Link to="/localizationqa" className='head-link'>Localization QA</Link></li>
                       <li><Link to="/voiceproduction" className='head-link'>Voice Production</Link></li>
                       <li><Link to="/datacollection" className='head-link'>Data Collection</Link></li>
                   </ul>
            </div>
              }

            </Grid>

            

            <Menu id='menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} >
            <MenuList style={{color:"white", width:"15rem",backgroundColor:"orange",padding:"1rem"}}onClick={handleMenuClose}>English</MenuList>
            <MenuList style={{color:"white", width:"15rem",backgroundColor:"orange",padding:"1rem"}}onClick={handleMenuClose}>Canadian French</MenuList>
            <MenuList style={{color:"white", width:"15rem",backgroundColor:"orange",padding:"1rem"}}onClick={handleMenuClose}>Japanese</MenuList>
            <MenuList style={{color:"white", width:"15rem",backgroundColor:"orange",padding:"1rem"}}onClick={handleMenuClose}>Korean</MenuList>
            <MenuList style={{color:"white", width:"15rem",backgroundColor:"orange",padding:"1rem"}}onClick={handleMenuClose}>Simplified chinese</MenuList>
            <MenuList style={{color:"white", width:"15rem",backgroundColor:"orange",padding:"1rem"}}onClick={handleMenuClose}>Traditional Chinese</MenuList>
           
            
            

            </Menu>
            
            {/* <DrawerC /> */}
           
        </>
      
    )
}

export default Header;