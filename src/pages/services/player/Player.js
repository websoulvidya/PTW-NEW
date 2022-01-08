import react,{useEffect}  from 'react';
import './Player.css';
import Gem from '../../../assets/images/playersupportheardericon_b.png'
import video from '../../../assets/images/playersupport.mp4'
import {Grid,Button,Typography, Container} from '@mui/material';

import img1 from '../../../assets/images/anyplatform.png'
import img2 from '../../../assets/images/anylanguage.png'
import img3 from '../../../assets/images/anycomplexitylevel.png'
import sega from '../../../assets/images/sega.png'
import star from '../../../assets/images/rstar.png'
import band from '../../../assets/images/bandai.png'
import ubisoft from '../../../assets/images/ubisoft.png'
import squareenix from '../../../assets/images/square.png'
import easports from '../../../assets/images/sports.png'
import map from '../../../assets/images/playermap.png'
import bike from "../../../assets/images/machinetranslationforplayersupport.png"
import con from '../../../assets/images/confluence.png'
import zen from   '../../../assets/images/zendesk.png'
import helpshift from '../../../assets/images/helpshift.png'
import quiq from '../../../assets/images/quiq.png'
import sales from '../../../assets/images/salesforce.png'
import jira from '../../../assets/images/jira.png'
// import frame from '../../../assets/images/frame.svg'
import logo1 from '../../../assets/images/55.jpg'
import logo2 from '../../../assets/images/57.jpg'
import logo3 from '../../../assets/images/65.jpg'
import Aos from "aos"
import "aos/dist/aos.css";
function Player() {
    useEffect(() => {
        Aos.init({duration: 2000});
         
     }, []);
    return(
        <div>
            <div className='section-1'>
            <div className='video'>
            <video autoPlay muted playsInline loop src={video}></video>
            </div>
            <div className='icon-1'>
                <img className='diamond' src={Gem} alt="" />
                <div  className='Heading-5'data-aos="fade-right">
                    <p className='head-1'>PLAYER SUPPORT</p>
                    <p className='head-2'data-aos="fade-right">HELPING PLAYERS LEVEL UP SINCE 1995</p>

                </div>
            </div>
            </div>
            <div className='section-2'>
                <Container>

                <h1  className='player-text' data-aos="fade-up">PLAYER SUPPORT ON A TRULY GLOBAL SCALE</h1>
                <p className='para-style'>We’ve been designing and delivering outstanding support for some of biggest names in the gaming industry for over 25 years</p>
                </Container>
            </div>
            
                
            <Grid container mt={2} spacing={7} className='pad' >
                <Grid item  xs={12} md={4} data-aos="fade-up" >
                    <img src={img1} alt="" />
                    <p className='wrap-title'>Support From Anywhere</p>
                   <p className='para-style'> <b> Our global reach and cloud-based infrastructure </b> means we can deliver support services from any of our <b>35 studio locations,</b>  or through our <b> Work From Anywhere </b>model. We provide our clients with support services to cater for any requirement.</p>
                   
                </Grid>
              

                <Grid item xs={12} md={4} className='red' data-aos="fade-up">
                   <img style={{textAlign:"right"}} src={img2} alt="" />
                   <p className='wrap-title'>In Any Language</p>
                <p className='para-style'>  <b> Our extensive network and years of experience in localization </b> means we can have unique access to a broad range of native speakers in most of the commonly required languages. We can quickly source any language our clients may need.</p>

                </Grid>
                
                <Grid item xs={12} md={4} className='red' data-aos="fade-up">
                 <img src={img3} alt="" />
                 <p className='wrap-title'>Through Any Channel</p>    
                <p className='para-style'> <b>  The application of technology is key in delivering efficient, scalable services.</b> Our specialist team has experience working with a range of partners in designing, developing and integrating technical solutions to meet our clients’ needs.</p>

                </Grid>
            
              
            </Grid> 
            <Grid mt={6} container spacing={0}  alignItems="center" justifyContent="center">
                 <Grid item xs={6} md={2} data-aos="flip-right">
                   <img src={sega} alt="" />
                 </Grid>
                 <Grid item xs={6} md={2} data-aos="flip-right">
                    <img src={star} alt="" />
                 </Grid>
                 <Grid item xs={6} md={2} data-aos="flip-right">
                    <img src={band} alt="" />
                 </Grid>
                 <Grid item mt={2} xs={6} md={2} data-aos="flip-right">
                    <img src={ubisoft} alt="" />
                 </Grid>
                 <Grid item xs={6} md={2} data-aos="flip-right">
                    <img src={squareenix} alt="" />
                 </Grid>
                 <Grid mt={1} item xs={4} md={12} data-aos="flip-right">
                    <img className='ea' src={easports} alt="" />
                 </Grid>
            </Grid>
            <div className='section-2'>
                <Container  data-aos="fade-up">

                <h1  className='player-text'>WE CAN BE WHEREVER YOUR PLAYERS ARE</h1>
                <p className='para-style'>Through our combination of studio locations in the US, Asia and Europe and our remote agents, we can offer local support across all time zones</p>
                </Container>
            </div>
            <div className='map-section'>
                <img className='map-image' src={map} alt="" />
              

                <ol className='map-name1'>
                    <li>PTW San Francisco</li>
                    <li>SIDE LA</li>
                    <li>PTW Montreal</li>
                    <li>PTW Glasgow</li>
                    <li>PTW London <br />SIDE London</li>
                    <li>PTW Bucharest</li>
                    <li>PTW Bangalore</li>
                    <li>PTW Hyderabad</li>
                </ol>
             
       

         <ol start={9} className='map-name2'>
             <li>PTW Singapore</li>
             <li>PTW Kuala Lumpur</li>
             <li>PTW Shanghai<br/> SIDE Shanghai</li>
             <li>PTW Taipei</li>
             <li>PTW Naju <br />PTW Seoul</li>
            <li>Our Studios in Japan</li>
           </ol>
            </div>
          
           <div className='section-2'>
                <Container> 

                <h1  className='player-text' data-aos="fade-up">WE SPEAK YOUR LANGUAGE…AND THOSE OF YOUR PLAYERS</h1>
                <p className='para-style' >We are currently supporting players in 42 languages and pride ourselves on being able to source any language you need. Our unique machine translation service helps give clients flexible coverage when they need it most.</p>
                </Container>
            </div>
               <div>
                   <Container>
                       <img src={bike} alt="" />
                   </Container>
               </div>
               <div className='section-2'>
                <Container  data-aos="fade-up">

                <h1  className='player-text'>OUR CHANNEL PARTNERS</h1>
                <p className='para-style'>We don’t believe in replacing people with machines, but we do believe that technology helps make people more efficient. That’s why we’ve partnered with some of the best platform providers, along side developing some of our own technology.</p>
                </Container>
            </div>
            <Grid  mt={4} container spacing={0}  alignItems="center" justifyContent="center" className='icon-section2'>
                 <Grid item xs={4} md={4} data-aos="flip-right">
                   <img src={con} alt="" />
                 </Grid>
                 <Grid item xs={4} md={4} data-aos="flip-right">
                    <img src={zen} alt="" />
                 </Grid>
                 <Grid item xs={4} md={4} data-aos="flip-right">
                    <img src={helpshift} alt="" />
                 </Grid>
                 <Grid mt={9} item  xs={4} md={4} data-aos="flip-right">
                    <img src={quiq} alt="" />
                 </Grid>
                 <Grid mt={9} item xs={4} md={4} data-aos="flip-right">
                    <img src={sales} alt="" />
                 </Grid>
                 <Grid mt={9} item xs={4} md={4} data-aos="flip-right">
                    <img  src={jira} alt="" />
                 </Grid>
            </Grid>
            <Container>
                <h1 className="last-head" data-aos="fade-up">HELPFUL LINKS</h1>
            </Container>
            <div className="wrapper">
        <div className="item">
            
          <img className="border" src="https://d323sccto6ke4l.cloudfront.net/images/playersupport/ps/en-us/frame.png" alt="" />
          <img className='img1' src={logo3} alt="" />
          <p className='text-last'>Continuous <br />LOCALIZATION..</p>
        </div>
        <div className="item">
          <img className="border" src="https://d323sccto6ke4l.cloudfront.net/images/playersupport/ps/en-us/frame.png" alt="" />
          <img className='img1' src={logo2} alt="" />
          <p className='text-last'>Localization Strategy <br /> for Emerging Marke..</p> 
        </div>
        <div className="item">
          <img className="border" src="https://d323sccto6ke4l.cloudfront.net/images/playersupport/ps/en-us/frame.png" alt="" />
          <img className='img1' src={logo1} alt="" />
          <p className='text-last'>Every question you <br />  need to Ask before..</p>
        </div>
      </div>


            <Grid container mt={6}>
                <Grid item md={4}>
                    <div className='card' id='card1'>
                        <img className='frame-img1' src={logo3} alt="" />
                        <p className='frame-text' >integrated CX And <br />QA: Driving..</p>
                        <img  className='frame-img' src="https://d323sccto6ke4l.cloudfront.net/images/playersupport/ps/en-us/frame.png" alt="" />
                   
                    </div>
                </Grid>
                <Grid item md={4}>
                <div className='card' id='card2'>
                        <img className='frame-img2' src={logo2} alt="" />
                        <p className='frame-text1' >Player Feedback</p>
                       <img className='frame-img'  src="https://d323sccto6ke4l.cloudfront.net/images/playersupport/ps/en-us/frame.png" alt="" />
                     

                    </div>
                </Grid>
                <Grid item md={4} >
               <div className='card' id='card3' >
               <img className='frame-img3' src={logo1} alt="" />
               <p className='frame-text2' >Business <br />Transformation</p>
                <img className='frame-img' src="https://d323sccto6ke4l.cloudfront.net/images/playersupport/ps/en-us/frame.png" alt="" />
                    </div>
                </Grid>
            </Grid>
            <Grid mt={6}>
                <button className='btn' >Read More <i class="fa fa-angle-right"></i>  <i class="fa fa-angle-right"></i>  <i class="fa fa-angle-right"></i></button>
                
            </Grid>
        </div>

        

)
}
export default Player