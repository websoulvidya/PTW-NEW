import react, { useEffect } from 'react';
import './Game.css';
import Aos from "aos";
import "aos/dist/aos.css";





import Sevengame  from './Sevengame';
import h1 from '../../../assets/images/2.jpg';
import h2 from '../../../assets/images/36.jpg';
import h3 from '../../../assets/images/56.jpg';

import Grid from '@mui/material/Grid';
// first game
import img from "../../../assets/images/productdevelopmentheardericon.png";

// second 
import img1 from '../../../assets/images/unity.png';
import img2 from '../../../assets/images/unreal.png';
import img3 from '../../../assets/images/gamemakerstudio.png';
import img4 from '../../../assets/images/html5.png';

// third
import p1 from '../../../assets/images/android.png';
import p2 from '../../../assets/images/ios.png';
import p3 from "../../../assets/images/pc.png";
import p4 from '../../../assets/images/cloud.png';
import p5 from "../../../assets/images/ps4.png";
import p6 from "../../../assets/images/ps5.png";
import p7 from "../../../assets/images/p7.png";
import p8 from "../../../assets/images/p8.png";
import p9 from "../../../assets/images/p9.png";
import p10 from "../../../assets/images/p10.png";
import p11 from "../../../assets/images/p11.png";
import p12 from "../../../assets/images/p12.png";

// four
import fg from '../../../assets/images/fourgame.png';

// five
import fiveg1 from '../../../assets/images/fivegame-img1.png';
import fiveg2 from '../../../assets/images/fivegame-img2.png';







function Game() {

    useEffect(() => {
        Aos.init({});
    }, []);
    return(
        <>
        <div className='firstgame'>
        
        <div className='uk-container-fluid bg-prodDev'>
            <video className="mainBgVideo" autoPlay playsInline muted loop>
                <source src="https://d323sccto6ke4l.cloudfront.net/videos/web/gamedev.mp4" type='video/mp4'></source>
            </video>

        

        <div className="home-text">
            <div className='iconicService'>
                <img style={{ zIndex:"1"}} className='deskImg' src={img} alt='image1'></img>
            

          
         <div data-aos="fade-right" className='servicebg-title' aos-init aos-animate>
             <p className='MainTitleDes'>GAME DEVELOPMENT</p>
             <p className='qa-sub-txt'>
                 <span>ENVISION</span>
                 <span>ENGAGE</span>
                 <span>ENGINEER</span>
             </p>
         </div>
         </div> 
         </div>
         </div>




        </div>
        <div className='secondgame'>
        <div className='techSection'>
            <Grid container justifyContent="center">
            <div className='platformHead'>
                    <p data-aos="slide-up" data-aos-duration='2000' className='head ' aos-init aos-animate><b>TECHNOLOGIES</b></p>

                </div>

            </Grid>
            <Grid container justifyContent="center" mt={2}>
                
                <div className='Alltechs'>
                    <img src={img1} data-aos="flip-right" className='tech1 ' alt='tech1' height={50} width={130}  aos-init aos-animate ></img>
                    <img src={img2}  data-aos="flip-right"className='tech2' alt='tech2' aos-init aos-animate></img>
                </div>
                <Grid items>
                    <div className='Alltechs'>
                        <img src={img3}  data-aos="flip-right" className='tech3' alt='tech3'aos-init aos-animate></img>
                        <img src={img4}  data-aos="flip-right" className='tech4' alt='tech4' aos-init aos-animate></img>
                    </div>



                </Grid>
                <Grid items>

                </Grid>
            </Grid>
        </div>



        </div>
        <div className='thirdgame'>
        
        <div className='platformSection'>
            <Grid container justifyContent='center' mt={4}>
                <div className='platformHead'>
                    <p className='head'><b>PLATFORM</b></p>
                </div>
           
            </Grid>
            <Grid container justifyContent='center' p={4}>
                <Grid item md={4} xs={12} spacing={0}>
                <div className='pmain-s1'>

                <div>
                <img src={p1} data-aos="flip-right" data-aos-duration='2000' className='plat1' alt='plat1' aos-init aos-animate></img>
                <p><b>Android</b></p>

                </div>
              
                
               
                
                <div>
                <img src={p2} data-aos="flip-right" data-aos-duration='2000' className='plat2' alt='plat2' aos-init aos-animate></img>
                 <p><b>iOS</b></p>

                </div>
                
                 
                 </div>
                </Grid>
                <Grid item md={4} xs={12} spacing={0}>
                <div className='pmain-s2'>
                    <div>
                    <img src={p3} data-aos="flip-right" data-aos-duration='2000'  className='plat3' alt='plat3'aos-init aos-animate></img>
                    <p><b>PC</b></p>

                    </div>
                    <div>
                    <img src={p4} data-aos="flip-right" data-aos-duration='2000' className='plat4' alt='plat4'aos-init aos-animate></img>
                      <p><b>Cloud</b></p>
                    </div>
                </div>
              
            
                
                 
                 
                
                 
            

                </Grid>
                <Grid item md={4} xs={12} spacing={0} >
                <div className='pmain-s3'>
                    <div>
                    <img src={p5} data-aos="flip-right" data-aos-duration='2000' className='plat5' alt='plat5'aos-init aos-animate></img>
                     <p><b>PS4</b></p>

                    </div>
                    <div>
                    <img src={p6} data-aos="flip-right" data-aos-duration='2000' className='plat6' alt='plat6'aos-init aos-animate></img>
                    <p><b>PS5</b></p>

                    </div>
                </div>
                
               
                
                
              
                
                

                </Grid>
               
                

             </Grid>
        
        </div>

        {/* second plarform  */}
        <div className='platformSection1'>
            <Grid container justifyContent='center' p={4}>
                <Grid item md={4} xs={12} spacing={0}>
                <div className='pmain-s1'>

                <div>
                <img src={p7}data-aos="flip-right" data-aos-duration='2000' className='plat1' alt='plat1' aos-init aos-animate></img>
                <p><b>Android</b></p>

                </div>
              
                
               
                
                <div>
                <img src={p8}data-aos="flip-right" data-aos-duration='2000' className='plat2' alt='plat2' aos-init aos-animate></img>
                 <p><b>iOS</b></p>

                </div>
                
                 
                 </div>
                </Grid>
                <Grid item md={4} xs={12} spacing={0}>
                <div className='pmain-s2'>
                    <div>
                    <img src={p9} data-aos="flip-right" data-aos-duration='2000'className='plat3' alt='plat3' aos-init aos-animate></img>
                    <p><b>PC</b></p>

                    </div>
                    <div>
                    <img src={p10} data-aos="flip-right" data-aos-duration='2000'className='plat4' alt='plat4'aos-init aos-animate></img>
                      <p><b>Cloud</b></p>
                    </div>
                </div>
              
            
                
                 
                 
                
                 
            

                </Grid>
                <Grid item md={4} xs={12} spacing={0} >
                <div className='pmain-s3'>
                    <div>
                    <img src={p11} className='plat5' alt='plat5'aos-init aos-animate></img>
                     <p><b>PS4</b></p>

                    </div>
                    <div>
                    <img src={p12} className='plat6' alt='plat6'aos-init aos-animate></img>
                    <p><b>PS5</b></p>

                    </div>
                </div>
                
               
                
                
              
                
                

                </Grid>
               
                

             </Grid>
        
        </div>

        </div>
       <div className='fourgame'>
       <div className='fourgame-main'>
            <Grid container>
                <Grid item md={6}>
                    <div className='fourgame-sub1'>
                    <img src={fg} alt='fourgame-img' className='fourgame-img' height={200}></img>
                    </div>
                  

                </Grid>
                <Grid item md={5}>
                <div className='fourgame-sub2'>
                    <p data-aos="slide-up" className="title" aos-init aos-animate><b>Game development</b></p>
                    <div className='fourgame-sub2-main'>
                    <div data-aos="slide-up" className='GameDevText' aos-init aos-animate>
                        <p>Go beyond game development and marketing to connect audiences with immersive worlds and storytelling. Only a gamer can understand the technicalities and complexities of games, and all our developers are gamers first.</p>
                       <p>Our team of expert Unity developers ensure that your game utilizes the latest features, technologies, and standards. We are continually evolving game standards and development technologies. </p>
                        <p>Specializing in all-Native, HTML5, and Hybrid technologies for mobile game development, our focus is on optimization and delivering seamless user experiences.</p>
                        </div>
                    </div>
                    </div>

                </Grid>
            </Grid>


        </div>
       </div>
       <div className="fivegame">
       <div className='fivegame-main'>
          <Grid container  justifyContent='center'>
              <div className='liveOpsText'>
                  <p data-aos="slide-up" className='liveOpsText-head' aos-init aos-animate><b>LIVE OPS</b></p>
                  <p data-aos="slide-up"className='liveOpsText-sub' aos-init aos-animate>
                 We look at existing systems, discover lost opportunities, and implement changes to refresh and re-engage players with your game.
                </p>
                <p data-aos="slide-up"className='liveOpsText-sub' aos-init aos-animate>We don't just look at extending the life of your game; we help it grow. We zealously find, anticipate, and eliminate player frustration as fast and efficiently as possible. </p>
               <p data-aos="slide-up" className='liveOpsText-sub' aos-init aos-animate>
               Analytics<span class="spacer"></span>| <span class="spacer"></span>Events<span class="spacer"></span>| <span class="spacer"></span>Promotions<span class="spacer"></span>| <span class="spacer"></span> Content <span class="spacer"></span>|  <span class="spacer"></span>Features <span class="spacer"></span>| <span class="spacer"></span>Problem Management
               </p>
               <p data-aos="slide-up" className='liveOpsText-sub'aos-init aos-animate>80% of the work begins after you launch your game, and it’s not always feasible to handle all of that internally. Our Live Ops teams have the know-how, and they’re ready to help.</p>
              </div>
              <div data-aos="zoom-in" className='liveOpsText-image1' aos-init aos-animate>
              <img src={fiveg1} className='liveOpsText-img1'></img>
              </div>
             
              </Grid>  
              <Grid container justifyContent='center'>
                  <div className='portText'>
                      <p data-aos="slide-up"className='portText-head' aos-init aos-animate>PORTING</p>
                      <p data-aos="slide-up" className='portText-sub' aos-init aos-animate>As products evolve and preferences change, our experts can revamp your game for new platforms and new generations of gamers. While porting is a fantastic way to access new markets and re-engage players, porting requires an expertise that developers and publishers may not have in-house.</p>
                  </div>
                  <div className='portText-image2'>
                      <img src={fiveg2} data-aos="zoom-in" className='portText-img2' aos-init aos-animate></img>
                      
                </div>
              </Grid>
            
        </div>
       </div>
       <div className="sevengame">
           <Sevengame simg1={h1} simg2={h2} simg3={h3} text11="Revolutionizing" text12="Customer" text21="So, You want to" text22="port your home" text3="Gateway to China"/>
       </div>
       
        </>

)
}
export default Game