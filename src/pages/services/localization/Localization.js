import react,{useEffect}  from 'react';
import './Localization.css';
import video from '../../../assets/images/localization.mp4'
import icon from '../../../assets/images/localizatonheardericon.png'
import gamet from '../../../assets/images/gametranslation.png'
import market from '../../../assets/images/marketingandadvertisingtranslation.png'
import mask from '../../../assets/images/localizationandculturalization.png'
import post from '../../../assets/images/posteditingmachinetranslation.png'
import red from '../../../assets/images/localizationsection.png'
// import frame from '../../../assets/images/panel.png'
import img1 from '../../../assets/images/63.jpg'
import img2 from '../../../assets/images/47.jpg'
import img3 from '../../../assets/images/33.jpg'
import Aos from "aos"
import "aos/dist/aos.css";
import CountUp from 'react-countup';




import { Grid,Paper,Box } from '@mui/material';

function Localization() {
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
                <img className='diamond' src={icon} alt="" />
                <div  className='Heading-1' data-aos="fade-right">
                    <p className='head-1'data-aos="fade-right">LOCALIZATION</p>
                    <p className='head-2' data-aos="fade-right">HIT THE RIGHT LINGUISTIC, CULTURAL, AND <br />COMMERCIAL TONE IN ANY NEW MARKET. </p>

                </div>
            </div>
            </div>
            <Grid container p={1} mt={10} >
                <Grid item xs={12} md={6}>
                <div data-aos="fade-up">


                    <img src={gamet} alt="" />
                    <h2 className='para-head'>Game Translation</h2>
                  <p className='para'>Video Game Localization Services from the experts. Reach more players by translating your game into any language while preserving its original meaning.</p>
                </div>
                </Grid>
                <Grid item xs={12} md={6} data-aos="fade-up">
                    <img src={market} alt="" />
                    <h2  className='para-head'>Marketing and Advertising <br /> Translation</h2>
                     <p className='para'>Translating (AKA transcreating) advertising and marketing materials requires local knowledge and context to land just right. Our translators are native speakers who can maneuver the intent, style, tone, and context of the original message to get the best result.</p>
                </Grid>
            </Grid>
            <Grid container p={12} className='bg-img' >
                <Grid item xs={12} md={6} data-aos="fade-up">
                   <img src={mask} alt="" />
                <h2 className='para-head'>Localization and Culturalization</h2>
                <p className='para1'>Our native-speaking linguists go beyond basic translation to localize and culturalize your game, adapting its culture to each new market -- we’re talking images, colors, music, holidays, taboos, clothing, food, and more.</p>
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 3, sm: 2 }} >
                   <img src={red} alt="" />
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 2, sm: 3 }} data-aos="fade-up">
                    <div  className='order' >

                   <img src={post} alt="" />
                <h2 className='para-head'>Post-editing Machine Translation</h2>
                <p className='para1'>Cut time and costs with machine translation that uses sophisticated machine learning algorithms to translate your game. Our native-speaking translators then proofread every translation to make sure it feels right and fits the context.</p>
                    </div>
                </Grid>
            </Grid>
          <Grid container className='bg-img2'>
              <Grid item md={3} xs={6}>
             <p className='number-style'><CountUp end={15} duration={3} />M</p> 
              <p className='para-styles'>Words Translated In 2020</p>
              </Grid>
              <Grid item md={3} xs={6}>
             <p  className='number-style'><CountUp end={9} duration={3} />.5M</p> 
              <p className='para-styles'>Characters Translated In 2020</p>
             </Grid>
             <Grid item md={3} xs={6}>
          <p  className='number-style'> <CountUp end={400} duration={3} />+</p> 
             <p className='para-styles'>Different Linguists</p>
            </Grid>
            <Grid item md={3} xs={6}>
         <p  className='number-style'>  <CountUp end={86} duration={3} /></p>
            <p className='para-styles'>Different Language Combinations</p>
              </Grid>  

          </Grid>
          <Grid mb={12} mt={2} >

          <h1 className='player-text1'>PTW’s Machine Translation Services</h1>
          </Grid>
          <Grid container>
              <Grid item md={6} xs={12} data-aos="fade-up">
                  <div className='left'>

                  <p className='mt-style' > <span className='dot'> &#8226;</span>MT Solution Advice</p>
                  <p className='mp-style'>We assist our clients in the implementation of Neural Machine Translation solutions: from identifying suitable content, to testing quality, to deploying the best MT engines into the localisation workflow.</p>
                  </div>
              </Grid>
              <Grid item md={6} xs={12}  >
              <div className='left'>
                  <p className='mt-style'> <span className='dot'> &#8226;</span>MT Engine Customization and Quality Testing</p>
                  <p className='mp-style'>We offer customization and quality testing of machine translation engines to deploy engines that are able to mimic the translation style and terminology of our clients.</p>
                  </div>
              </Grid>
              <Grid item md={6} xs={12} data-aos="fade-up">
              <div className='left'>
                  <p className='mt-style'> <span className='dot'> &#8226;</span>MT Integration Into Workflow</p>
                  <p className='mp-style'>We help our clients to seamlessly integrate the MT engines into their preferred CAT tool or TMS, ensuring that a “traditional” translation environment is kept.</p>
                  </div>
              </Grid>
              <Grid item md={6} xs={12} >
              <div className='left'>
                  <p className='mt-style'> <span className='dot'> &#8226;</span>MT Post-Editing</p>
                  <p className='mp-style' >Cut time and costs with machine translation that uses sophisticated machine learning algorithms to translate your game. Our native-speaker translators will edit the machine-translated texts to guarantee that the 'look and feel' of the original game is transferred into the local version, as per the traditional translation workflow.</p>
                  </div>
              </Grid>
          </Grid>
          <h1 className="last-h" data-aos="fade-up">HELPFUL LINKS</h1>

          <div className="wrapper">
        <div className="item">
            
          <img className="border" src="https://d323sccto6ke4l.cloudfront.net/images/localization/local/en-us/frame.png" alt="" />
          <img className='img1' src={img1} alt="" />
          <p className='text-last'>Continuous <br />LOCALIZATION..</p>
        </div>
        <div className="item">
          <img className="border" src="https://d323sccto6ke4l.cloudfront.net/images/localization/local/en-us/frame.png" alt="" />
          <img className='img1' src={img2} alt="" />
          <p className='text-last'>Localization Strategy <br /> for Emerging Marke..</p> 
        </div>
        <div className="item">
          <img className="border" src="https://d323sccto6ke4l.cloudfront.net/images/localization/local/en-us/frame.png" alt="" />
          <img className='img1' src={img3} alt="" />
          <p className='text-last'>Every question you <br />  need to Ask before..</p>
        </div>
      </div>


          <Grid container mt={6}>
                <Grid item md={4}>
                    <div className='card' id='card1o'>
                        <img className='frame-img1' src={img1} alt="" />
                        <p className='frame-text' >Continuous <br />LOCALIZATION..</p>
                        <img  className='frame-img'  src="https://d323sccto6ke4l.cloudfront.net/images/localization/local/en-us/frame.png" alt="" />
                   
                    </div>
                </Grid>
                <Grid item md={4}>
                <div className='card' id='card2o'>
                        <img className='frame-img2' src={img2} alt="" />
                        <p className='frame-text1' >Localization Strategy <br /> for Emerging Marke..</p>
                       <img className='frame-img' src="https://d323sccto6ke4l.cloudfront.net/images/localization/local/en-us/frame.png" alt="" />
                     

                    </div>
                </Grid>
                <Grid item md={4} >
               <div className='card' id='card3o' >
               <img className='frame-img3' src={img3} alt="" />
               <p className='frame-text2' >Every question you <br />  need to Ask before..</p>
                <img className='frame-img'  src="https://d323sccto6ke4l.cloudfront.net/images/localization/local/en-us/frame.png" alt="" />
                    </div>
                </Grid>
            </Grid>
            <Grid mt={6}>
                <button className='btn1' >Read More <i class="fa fa-angle-right"></i>  <i class="fa fa-angle-right"></i>  <i class="fa fa-angle-right"></i></button>
                
            </Grid>
        </div>

)
}
export default Localization