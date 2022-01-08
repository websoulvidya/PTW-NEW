import react,{ useEffect } from 'react';
import './Home.css';
import Aos from "aos";
import "aos/dist/aos.css";




// first home
import Grid from '@mui/material/Grid';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

import hlogo from '../../assets/images/white_blue.png';
import textbg from '../../assets/images/homebgtext.png';
import s1 from '../../assets/images/s1.png';
import s2 from '../../assets/images/s2.png';
import s3 from '../../assets/images/s3.png';
import s4 from '../../assets/images/s4.png';
import s5 from '../../assets/images/s5.png';
import s6 from '../../assets/images/s6.png';
import s7 from '../../assets/images/s7.png';
import s8 from '../../assets/images/s8.png';
import hi1 from '../../assets/images/homeicon1.png';
import hi2 from '../../assets/images/homeicon2.png';
import hi3 from '../../assets/images/homeicon3.png';
import hi4 from '../../assets/images/homeicon4.png';
import hi5 from '../../assets/images/homeicon5.png';
import hi6 from '../../assets/images/homeicon6.png';
import hi7 from '../../assets/images/homeicon7.png';
import hi8 from '../../assets/images/homeicon8.png';
import hs1 from '../../assets/images/homeslide1.png';
import hs2 from '../../assets/images/homeslide2.png';
import hs3 from '../../assets/images/homeslide3.png';
import hs4 from '../../assets/images/homeslide4.png';
import hs5 from '../../assets/images/homeslide5.png';
import hs6 from '../../assets/images/homeslide6.png';
import hs7 from '../../assets/images/homeslide7.png';
import hs8 from '../../assets/images/homeslide8.png';


// secondhome
import sh from '../../assets/images/kickstartimage.png';


// fourhouse
import bor from '../../assets/images/frame.svg'

import c1 from '../../assets/images/g1.jpg';
import c2 from '../../assets/images/g2.jpg';
import c3 from '../../assets/images/g3.jpg';

// third game
import thirdbg from '../../assets/images/bg.png';
import ci from '../../assets/images/careersimage.png';
import map from '../../assets/images/map.svg';



function Home() {

    useEffect(() => {
        Aos.init({});
    }, []);
    return(
        <>
         <div className='firsthome'>
         <div className='home-bg'>
        <Grid container>
        <video className='home-video' preload='true' autoPlay muted loop poster playsInline>
            <source src='https://d323sccto6ke4l.cloudfront.net/videos/web/homepage.mp4' type='video/mp4'></source>

        </video>
        <Grid item xs={12} md={6}>
        <div className='home-con'>
        <div className='home-text-content'>
            <div data-aos="slide-up" data-aos-duration='2000' className='home-title' aos-init aos-animate>
                <div className='home-text-p'>
                    <p ><strong>BRINGING YOUR STORY TO <br></br> THE WORLD</strong></p>
                </div>
                <div data-aos="slide-up"  className='home-text-content-bg' aos-init aos-animate>
                    <img src={textbg} className='home-text-content-bg-img'></img>
                </div>

            </div>
        </div>
        <button type='button' className='btn btn-outline home-button'>
            <span>
            <strong>DISCOVER MORE</strong>
            <img src={hlogo} className='hlogo-image'></img>
            </span>
        </button>
        </div>
    </Grid>
    <Grid item xs={12}  md={6}>
        <div className='left-number' >
            <div data-aos="fade-left" data-aos-duration='2000' aos-init aos-animate >
                
                <p><b>35+ <span>studio</span></b></p>
            </div>
            <div  data-aos="fade-left" data-aos-duration='2000' aos-init aos-animate >
                
                <p><b>1500+ <span>titles</span></b></p>
            </div>
            <div data-aos="fade-left" data-aos-duration='2000' aos-init aos-animate>
                <p><b>26 <span>Years of XP</span></b> </p>
            </div>
        </div>
    </Grid>

        
        </Grid>

        <Grid container justifyContent='center'>
            <div data-aos="slide-up" data-aos-duration='2000' className='services-bg' aos-init aos-animate>
               <h3><b>SERVICES</b></h3> 
            </div>
            <div className='services-icons'>
                <div className='ser-img11'>
                    <div class="myDIV1">
                    <img  src={s1} className='ser-img1'></img> 
                    <b><p>Art Production</p></b>

                    </div>
                    <div className='hide1'>
                        <p className="sub_label1"> Art Production</p>
                        <p className="sub_content1">
                        Our in-house art team, 1518 Studios, offers the highest-quality assets: from 2D concept design to 3D animation, in-game to package art, smartphone to VR, we make everything look amazing.&nbsp;
                        </p>
                        <button className='sub-button'>TELL ME MORE <span><ArrowRightAltRoundedIcon /></span></button>
                    </div>
                   
                </div>
                <div className='ser-img22'>
                    <div className='myDIV2'>
                    <img  src={s2} className='ser-img2'></img> 
                   <b><p>Game Development</p></b> 

                    </div>
                    <div className='hide2'>
                        <p className='sub_label2'>GAME DEVELOPMENT</p>
                        <p className="sub_content2">80% of the work begins after launch, and you can't always handle it internally. From Co-Dev to Live Ops, our experienced teams extend your title's life.</p>
                        <button className='sub-button'>TELL ME MORE <span><ArrowRightAltRoundedIcon /></span></button>
                    </div>
                   
                </div>
                <div className='ser-img33'>
                   <div className='myDIV3'>
                   <img  src={s3} className='ser-img3'></img> 
                   <b><p>Quality Assurance</p></b> 
                       </div> 
                   <div className='hide3'>
                       <p className='sub_label3'>QUALITY ASSURANCE</p>
                       <p className='sub_content3'>Our testing covers every aspect of the user's experience, across all genres and platforms.</p>
                       <button className='sub-button'>TELL ME MORE <span><ArrowRightAltRoundedIcon /></span></button>
                   </div>
                </div>
                <div className='ser-img44'>
                    <div className='myDIV4'>
                    <img  src={s4} className='ser-img4'></img> 
                    <b><p>Player Support</p></b> 
                    </div>
                    <div className='hide4'>
                        <p className='sub_label4'>PLAYER SUPPORT</p>
                        <p className='sub_content4'>When players need help, we’re there for them, 24/7. Our teams play the games they support, so we can handle any issue, no matter how complex. </p>
                        <button className='sub-button'>TELL ME MORE <span><ArrowRightAltRoundedIcon /></span></button>
                    </div>
                   
                </div>
                <div className='ser-img55'>
                    <div className='myDIV5'>
                    <img  src={s5} className='ser-img5'></img> 
                    <b><p>Localization</p></b> 

                    </div>
                    <div className='hide5'>
                        <p className='sub_label5'> LOCALIZATION</p>
                        <p className='sub-content5'>Our native linguistic experts ensure that your game’s tone and dialogue are retained across languages, cultures, and even local slang. </p>
                        <button className='sub-button'>TELL ME MORE <span><ArrowRightAltRoundedIcon /></span></button>
                    </div>
                    
                </div>
                <div className='ser-img66'>
                    <div class="myDIV6">
                    <img  src={s6} className='ser-img6'></img> 
                    <b><p>Localization QA</p></b>

                    </div>
                    <div className='hide6'>
                        <p className="sub_label6"> Localization QA</p>
                        <p className="sub_content6">
                        Our bench of local experts adapt your game's content to each new market. More than mere dialogue, we handle images, colors, music, holidays, taboos, clothing, food, and more. 
                        </p>
                        <button className="sub-button">
                        TELL ME MORE <span><ArrowRightAltRoundedIcon /></span>
                        </button>
                    </div>
                    
                </div>
                <div className='ser-img77'>
                    <div className='myDIV7'>
                    <img  src={s7} className='ser-img7'></img> 
                    <b><p>Voice Production</p></b>
                    </div>
                    <div className='hide7'>
                        <p className='sub_label7'>
                        Voice Production
                        </p >
                        <p className='sub_content7'>
                        We’re committed to excellence, from casting to post-production services, featuring an award-winning team with over 25 years’ industry experience. 
                        </p>
                        <button className="sub-button">
                        TELL ME MORE <span><ArrowRightAltRoundedIcon /></span>
                        </button>
                    </div>
                   
                </div>
                <div className='ser-img88'>
                    <img  src={s8} className='ser-img8'></img> 
                   <b><p>Data Collection</p></b> 
                </div>


            </div>

        </Grid>
{/* mobile view */}
         <Grid item  >
        <div className='mobile-home-con'>
        <div className='mobile-home-text-content'>
            <div data-aos="slide-up" className='mobile-home-title' aos-init aos-animate>
                <div className='mobile-home-text-p'>
                    <p ><b>BRINGING YOUR STORY TO  THE WORLD</b></p>
                </div>
                

            </div>
        </div>
        <button type='button' className='btn btn-outline mobile-home-button'>
            <span>
            DISCOVER MORE
            <img src={hlogo} className='mobile-hlogo-image'></img>
            </span>
        </button>
        </div>
    </Grid>
    <Grid item  >
        <div className='mobile-left-number'>

            <div className='mobile-left-sub1'>
            <div >
                
                <p><b>35+ <span>studio</span></b></p>
            </div>
            <div >
                
                <p><b>1500+ <span>titles</span></b></p>
            </div>
            </div>
            <div className='mobile-left-sub2'>
            <div >
                <p><b>26 <span>Years of XP</span></b> </p>
            </div>

            </div>
           
        </div>
    </Grid>


        </div>
        <div className="mobile-firsthome-slider">
            <div className='mobile-image-slider-track'>
                <div className='mobile-image-slide'>
                    <div>
                    <div className='m-fh-sub1'>
                        <img src={hi1} className='m-fh-sub1-img1'></img>
                        <p className='home-art'>Art Production</p>
                    </div>
                    <div className='m-fh-sub2'>
                        <img src={hs1} className='m-fh-sub2-img1'></img>
                    </div>

                    </div>
                    <div>
                    <div className='m-fh-sub1'>
                        <img src={hi2} className='m-fh-sub1-img1'></img>
                        <p className='home-art'>Game development</p>
                    </div>
                    <div className='m-fh-sub2'>
                        <img src={hs2} className='m-fh-sub2-img1'></img>
                    </div>

                    </div>
                    <div>
                    <div className='m-fh-sub1'>
                        <img src={hi3} className='m-fh-sub1-img1'></img>
                        <p className='home-art'>Quality Assurance</p>
                    </div>
                    <div className='m-fh-sub2'>
                        <img src={hs3} className='m-fh-sub2-img1'></img>
                    </div>

                    </div>
                    <div>
                    <div className='m-fh-sub1'>
                        <img src={hi4} className='m-fh-sub1-img1'></img>
                        <p className='home-art'>Art Production</p>
                    </div>
                    <div className='m-fh-sub2'>
                        <img src={hs4} className='m-fh-sub2-img1'></img>
                    </div>

                    </div>
                    <div>
                    <div className='m-fh-sub1'>
                        <img src={hi5} className='m-fh-sub1-img1'></img>
                        <p className='home-art'>PLAYER SUPPORT</p>
                    </div>
                    <div className='m-fh-sub2'>
                        <img src={hs5} className='m-fh-sub2-img1'></img>
                    </div>

                    </div>
                    <div>
                    <div className='m-fh-sub1'>
                        <img src={hi6} className='m-fh-sub1-img1'></img>
                        <p className='home-art'>Localization</p>
                    </div>
                    <div className='m-fh-sub2'>
                        <img src={hs6} className='m-fh-sub2-img1'></img>
                    </div>

                    </div>
                    <div>
                    <div className='m-fh-sub1'>
                        <img src={hi7} className='m-fh-sub1-img1'></img>
                        <p className='home-art'>Voice Production</p>
                    </div>
                    <div className='m-fh-sub2'>
                        <img src={hs7} className='m-fh-sub2-img1'></img>
                    </div>

                    </div>
                    <div>
                    <div className='m-fh-sub1'>
                        <img src={hi8} className='m-fh-sub1-img1'></img>
                        <p className='home-art'>DATA COLLECTION</p>
                    </div>
                    <div className='m-fh-sub2'>
                        <img src={hs8} className='m-fh-sub2-img1'></img>
                    </div>

                    </div>
                  
                    

                </div>

            </div>
        </div>
          
       

        
        








        
         </div>

         <div className='secondhome'>
             

         <div className='secondhome-main'>
             <Grid container>
                 <Grid item md={6}>
                     <div data-aos="slide-up" className='secondhome-sub1 ' aos-init aos-animate>
                         <img src={sh} className='secondhome-sub1-image'></img>

                     </div>
                 </Grid>
                 <Grid item md={6}>
                     <div className='secondhome-sub2' >
                         <div>
                            <strong><p data-aos-duration='2000' data-aos="slide-up" className='shs1' aos-init aos-animate>JOIN 650+ DEVELOPERS AND PUBLISHERS THAT WORK WITH PTW</p></strong> 
                             

                         </div>
                         <div >
                         <p data-aos="slide-up" data-aos-duration='2000' className='shs2'aos-init aos-animate>We've teamed up with some of the best to craft incredible gaming experiences. We work in every genre and on every platform.</p>
                         </div>
                         <div>
                             <div data-aos="slide-up" data-aos-duration='2000'className='secondhome-sub-sub' aos-init aos-animate>
                                 <div>
                                   <p style={{fontSize:"0.7rem"}}><span><b>35+</b></span><br></br>
                                  <strong>Global Studios</strong> </p>
                                 </div>
                                 <div>
                                   <p style={{fontSize:"0.7rem"}}><span><b>8,500+</b></span><br></br><center><strong>Employee</strong></center></p>
                                   
                                 </div>
                                 <div>
                                   <p style={{fontSize:"0.7rem"}}><span><b>26</b></span> <br></br><strong>Years of XP</strong></p>
                                  
                                 </div>
                             </div>
                         </div>
                         <div data-aos-duration='2000' data-aos="slide-up"  aos-init aos-animate>
                             <button className='second-home-button'>LET'S BUILD SOMETHING TOGETHER</button>
                         </div>
                     </div>

                 </Grid>
             </Grid>

          </div>
          <div className='mobile-secondhome'>
              <Grid container>
                  <div className='mobile-secondhome-sub1'>
                    <strong><p className='mobile-shs1'>JOIN 650+ DEVELOPERS AND PUBLISHERS THAT WORK WITH PTW</p></strong> 
                  </div>
                  <div >
                   <p className='mobile-shs2'>We've teamed up with some of the best to craft incredible gaming experiences. We work in every genre and on every platform.</p>
                   </div>
                <Grid item xs={6}>
                <div className='mobile-secondhome-sub1'>
                <img src={sh} className='mobile-secondhome-sub1-image'></img>
                </div>
               

                </Grid>
                <Grid item xs={6}>
                    <div className='mobile-secondhome-sub-sub'>
                        <div>
                        <p><span><b>35+</b></span><br></br>
                                   <b>Global Studios</b></p>
                        </div>
                        <div>
                        <p><span><b>8,500+</b></span><br></br><b>Employee</b></p>
                                   
                        </div>
                        <div>
                        <p><span><b>26</b></span> <br></br><b>Years of XP</b></p>
                                  
                        </div>
                    </div>

                </Grid>

                <div className='mobile-second-btn'>
                <button className='mobile-second-home-button'>LET'S BUILD SOMETHING TOGETHER</button>
                </div>

              </Grid>
          </div>














         </div>
         {/* <div className='fourhome'>
         <Sevengame/>
         </div> */}
         <div className='fourhome'>
         <div className='sevengame-mainkk'>
            <Grid Container>
                <div data-aos="slide-up" className='sevengame-headkk' aos-init aos-animate>
                    <h1><b>HELPFUL LINKS</b></h1>
                </div>
            </Grid>
            <Grid container spacing={2} >
                <Grid item>
                    <div data-aos="zoom-in" className='seven-img1kk' aos-init aos-animate>
                        <img src={c1} className='sev-imgkk'></img>
                        <span className='sev-textkk'><b>How To Automate <br></br>QA Testing</b></span>
                        

                    </div>
                    <div data-aos="zoom-in" className='squarekk'>
                           <img src={bor} className='squkk'></img>
                        </div>

                </Grid>
                <Grid item>
                <div data-aos="zoom-in" className='seven-img2kk' aos-init aos-animate>
                <img src={c2} className='sev-imgkk'></img>
                <span  className='sev-textkk'><b>Integrated CX<br></br>QA: Driving..</b></span>
                        </div>
                        <div className='squarekk' aos-init aos-animate>
                           <img data-aos="zoom-in" src={bor} className='squkk'></img>
                        </div>
                    
                </Grid>
                <Grid item>
                <div data-aos="zoom-in" className='seven-img3kk' aos-init aos-animate>
                <img src={c3} className='sev-imgkk'></img>
                <span  className='sev-textkk'><b>Continuous<br></br>LOCALIZATION</b></span>
               
                        
                        </div>
                <div data-aos="zoom-in" className='squarekk' aos-init aos-animate>
                           <img src={bor}className='squkk'></img>
                        </div> 
                </Grid>
            </Grid>

        </div>
        <div className="seven-buttonkk">
            <a href='#' data-aos="fade-right" className='read-buttonkk' aos-init aos-animate>READ MORE <i class="fa fa-angle-double-right" style={{fontSize:"20px",color:"#FF0A04"}}></i> </a>
        </div>
        <div data-aos="fade-right" className='square1kk' aos-init aos-animate>
                           <img src={bor}className='squ1kk'></img>
                        </div> 
        <div className='sevengame-mobilemainkk'>
            <Grid container justifyContent='center'>
            <div className='sevengame-headkk'>
                    <h1><b>HELPFUL LINKS</b></h1>
                </div>

            </Grid>
            <Grid container >
            <div className='mobile-subkk'>
            
            <div className='mobile-sub-s1kk'>
            <div className='mobile-sub-headkk'>
            <img src={c1} className='sev-mob-img1kk'></img>
            <p className='sev-mobile-textkk'><b>How To Automate <br></br>QA Testing</b></p>
            </div>
            <div className='mobile-squarekk'>
                           <img src={bor} className='mobile-squkk'></img>
                        </div>
            </div>
            <div className='mobile-sub-s1kk'>
            <div className='mobile-sub-headkk'>
            <img src={c3} className='sev-mob-img1kk'></img>
            <p className='sev-mobile-textkk'><b>Integrated CX<br></br>QA: Driving..</b></p>
            </div>
            <div className='mobile-squarekk'>
                           <img src={bor} className='mobile-squkk'></img>
                        </div>
            </div>
            <div className='mobile-sub-s1kk'>
            <div className='mobile-sub-headkk'>
            <img src={c2} className='sev-mob-img1kk'></img>
            <p className='sev-mobile-textkk'><b>Continuous<br></br>LOCALIZATION</b></p>
            </div>
            <div className='mobile-squarekk'>
                           <img src={bor} className='mobile-squkk'></img>
                        </div>
            </div>
           

        
        

           
            </div>
            </Grid>


        </div>
        <div className="seven-mobile-buttonkk">
            <a href='#' className='read-mobile-buttonkk' >READ MORE <i class="fa fa-angle-double-right" style={{fontSize:"20px",color:"#FF0A04"}}></i> </a>
        </div>
        <div className='mobile-square1kk'>
        <img src={bor}className='mobile-squkk1'></img>
        </div> 
















         </div>
         <div className='thirdhome'>
            

         <div className='Thirdhome-main'>
            <Grid container>
                <Grid item xs={6} md={8}>
                    <div className='third-img'>
                    <img src={thirdbg }></img>
                    </div>
                    <div className='third-main-sub'>
                    <div className='third-sub1'>
                        <p data-aos-duration='2000' data-aos="slide-up" className='ts1'aos-init aos-animate>JOIN OUR</p>
                        <p data-aos-duration='2000' data-aos="slide-up" className='ts2' aos-init aos-animate>SQUAD</p>
                        <p data-aos-duration='2000' data-aos="slide-up" className='ts3'aos-init aos-animate>of master wizards, warriors and <br></br> heros!</p>
                        <p className='mobile-ts3'>of master <br></br>wizards, warriors<br></br> and  heros!</p>
                    </div>
                    <div data-aos="slide-up" data-aos-duration='2000' aos-init aos-animate>
                        <button className='third-button'>CAREERS</button>
                    </div>
                    </div>

                </Grid>
                <Grid item  xs={6} md={4}>
                 <img src={ci} className='ths-img'></img>
                </Grid>
            </Grid>
        </div>
        <div className='thirdhome-main2'>
            <Grid container>
                <Grid item md={4}>
                    <div data-aos="slide-up" className='thirdhome-main2-p' aos-init aos-animate>
                      <p className='camp1'><b>WE ARE THE </b> </p>
                       <p className='camp2'><b>CHAMPIONS</b></p>
                       <p className='camp3'>of the world...</p>
                    </div>
                </Grid>
                <div className='third-map'>
                    <img src={map} className='third-map-image'></img>
                </div>
                <div data-aos="fade-right" className="third-map-button" aos-init aos-animate>
                    <button className="third-map-but">Location</button>
                </div>
            </Grid>
        </div>
            







         </div>
         
        </>

)
}
export default Home;