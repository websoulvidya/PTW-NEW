import React from 'react';
import Grid from '@mui/material/Grid';

import './Sevengame.css';
import bor from '../../../assets/images/frame.svg';

export const Sevengame = (props) => {
    return (
        <>
        <div className='sevengame-main'>
            <Grid Container>
                <div data-aos="slide-up" className='sevengame-head' aos-init aos-animate>
                    <h1><b>HELPFUL LINKS</b></h1>
                </div>
            </Grid>
            <Grid container spacing={2} >
                <Grid item>
                    <div data-aos="zoom-in" className='seven-img1' aos-init aos-animate>
                        <img src={props.simg1} className='sev-img'></img>
                        <span className='sev-text'><b>{props.text11} <br></br>{props.text12}</b></span>
                        

                    </div>
                    <div data-aos="zoom-in" className='square'>
                           <img src={bor} className='squ'></img>
                        </div>

                </Grid>
                <Grid item>
                <div data-aos="zoom-in" className='seven-img2' aos-init aos-animate>
                <img src={props.simg2} className='sev-img'></img>
                <span  className='sev-text'><b>{props.text21}<br></br>{props.text22}</b></span>
                        </div>
                        <div className='square' aos-init aos-animate>
                           <img data-aos="zoom-in" src={bor} className='squ'></img>
                        </div>
                    
                </Grid>
                <Grid item>
                <div data-aos="zoom-in" className='seven-img3' aos-init aos-animate>
                <img src={props.simg3} className='sev-img'></img>
                <span  className='sev-text'><b>{props.text3}</b></span>
               
                        
                        </div>
                <div data-aos="zoom-in" className='square' aos-init aos-animate>
                           <img src={bor}className='squ'></img>
                        </div> 
                </Grid>
            </Grid>

        </div>
        <div className="seven-button">
            <a href='#' data-aos="fade-right" className='read-button' aos-init aos-animate>READ MORE <i class="fa fa-angle-double-right" style={{fontSize:"20px",color:"#FF0A04"}}></i> </a>
        </div>
        <div data-aos="fade-right" className='square1' aos-init aos-animate>
                           <img src={bor}className='squ1'></img>
                        </div> 
        <div className='sevengame-mobilemain'>
            <Grid container justifyContent='center'>
            <div className='sevengame-head'>
                    <h1><b>HELPFUL LINKS</b></h1>
                </div>

            </Grid>
            <Grid container >
            <div className='mobile-sub'>
            
            <div className='mobile-sub-s1'>
            <div className='mobile-sub-head'>
            <img src={props.simg1} className='sev-mob-img1'></img>
            <p className='sev-mobile-text'><b>{props.text11} <br></br>{props.text12} </b></p>
            </div>
            <div className='mobile-square'>
                           <img src={bor} className='mobile-squ'></img>
                        </div>
            </div>
            <div className='mobile-sub-s1'>
            <div className='mobile-sub-head'>
            <img src={props.simg3} className='sev-mob-img1'></img>
            <p className='sev-mobile-text'><b>{props.text21}<br></br>{props.text22}</b></p>
            </div>
            <div className='mobile-square'>
                           <img src={bor} className='mobile-squ'></img>
                        </div>
            </div>
            <div className='mobile-sub-s1'>
            <div className='mobile-sub-head'>
            <img src={props.simg2} className='sev-mob-img1'></img>
            <p className='sev-mobile-text'><b>{props.text3}</b></p>
            </div>
            <div className='mobile-square'>
                           <img src={bor} className='mobile-squ'></img>
                        </div>
            </div>
           

        
        

           
            </div>
            </Grid>


        </div>
        <div className="seven-mobile-button">
            <a href='#' className='read-mobile-button' >READ MORE <i class="fa fa-angle-double-right" style={{fontSize:"20px",color:"#FF0A04"}}></i> </a>
        </div>
        <div className='mobile-square1'>
        <img src={bor}className='mobile-squ1'></img>
        </div> 
            
        </>
    )
}


export default Sevengame;