import react from 'react';
import './Footer.css';
import Grid from '@mui/material/Grid';
import fimage from '../../assets/images/ptw.svg';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import ft1 from '../../assets/images/side-foooter-logo-bkp.png';
import ft2 from '../../assets/images/1518studios_logo.png';
import ft3 from '../../assets/images/entalize-footer-logo.png';
import ft4 from '../../assets/images/iso.png';


function Footer() {
    return(
        <>
        <Grid container>
            <div className='footer-main1'>
                <p style={{color:"#FF0A04"}}><b>Let’s talk about your next big idea</b></p><span><i class='fas fa-angle-double-right'></i><i class='fas fa-angle-right'></i></span>
            </div>

        </Grid>
        <Grid container>
            <footer className='footer-bg'>
                <Grid item md={8} xs={12}>
                <div className='footer-sub-bg'>
                <div className='footer-sub-bg-sub1'>
                <div>
                 <img src={fimage} className='fimage-logo'></img>
                </div>  
                <div className='follow'>
                <span style={{color:"white"}}>Follow us</span>
                </div> 
                <div className='sociallinks'>
                <li className='sl'><TwitterIcon /></li>
                <li className='sl'><FacebookIcon /></li>
                <li className='sl'><InstagramIcon /></li>
                <li className='sl'><LinkedInIcon /></li>
               



                </div>

                </div>
                <div className='footer-sub-bg-sub2'>
                    <ul className="fsub">
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>

                </div>

                <div className='footer-sub-bg-sub3'>
                    <ul className='fsub3'>
                        <li>Website Terms of Usage</li>
                        <li>Privacy Policy</li>
                        <li>CSR Policy (India)</li>
                        <li>LAB</li>
                    </ul>
                </div>
               
            
              
                
              
              

                </div>
               

                </Grid>
                
                <Grid container >
                <div className='footer-logo-img'>
                <img src={ft1} className='fli-1'></img>
                <img src={ft2} className='fli-2'></img>
                <img src={ft3} className='fli-3'></img>
                <img src={ft4} className='fli-4'></img>


                </div>
                <div className='mobile-footer-logo-img'>
                <img src={ft1} className='mobile-fli-1'></img>
                <img src={ft2} className='mobile-fli-2'></img>
                <img src={ft3} className='mobile-fli-3'></img>
                <img src={ft4} className='mobile-fli-4'></img>


                </div>
               
                </Grid>
                
                
            </footer>
        </Grid>
        </>

)
}
export default Footer