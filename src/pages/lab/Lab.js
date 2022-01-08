import react from 'react';
import './Lab.css'
import video from '../../assets/images/ptwlab.mp4';
import art from '../../assets/images/artproduction.png';
import game from '../../assets/images/productdevelopment.png';
import data1 from '../../assets/images/datacollection.png';
import quality from '../../assets/images/qualityassurance.png';
import player from '../../assets/images/playersupport.png';
import local from '../../assets/images/localization.png';
import localqa from '../../assets/images/localizationqa.png';
import voice from '../../assets/images/voiceproduction.png';
import border from '../../assets/images/border.svg';
import bord from '../../assets/images/bord.svg';
import img01 from '../../assets/images/000.jpg';
import img1 from '../../assets/images/001.jpg';
import img2 from '../../assets/images/002.jpg';
import img3 from '../../assets/images/003.jpg';
import img4 from '../../assets/images/004.jpg';
import img5 from '../../assets/images/005.jpg';
import img6 from '../../assets/images/006.jpg';
import img7 from '../../assets/images/007.jpg';
import img8 from '../../assets/images/008.jpg';
import img9 from '../../assets/images/009.jpg';
import img10 from '../../assets/images/010.jpg';
import img11 from '../../assets/images/011.jpg';
import img12 from '../../assets/images/012.jpg';
import img13 from '../../assets/images/013.jpg';
import img14 from '../../assets/images/014.jpg';
import img15 from '../../assets/images/015.jpg';
import img16 from '../../assets/images/016.jpg';
import img17 from '../../assets/images/017.jpg';
import img18 from '../../assets/images/018.jpg';
import img19 from '../../assets/images/019.jpg';
import img20 from '../../assets/images/020.jpg';
import img21 from '../../assets/images/021.jpg';
import img22 from '../../assets/images/022.jpg';
import img23 from '../../assets/images/023.jpg';
import img24 from '../../assets/images/024.jpg';
import img25 from '../../assets/images/025.jpg';
import img26 from '../../assets/images/026.jpg';
import img27 from '../../assets/images/027.jpg';
import img28 from '../../assets/images/028.jpg';
import img29 from '../../assets/images/029.jpg';
import img32 from '../../assets/images/032.jpg';
import img33 from '../../assets/images/033.jpg';
import img34 from '../../assets/images/034.jpg';
import img35 from '../../assets/images/035.jpg';
import img36 from '../../assets/images/036.jpg';
import img37 from '../../assets/images/037.jpg';
import img38 from '../../assets/images/038.jpg';
import bod from '../../assets/images/article.png';



function Lab() {


    return(
        <div className='cls.body'>
            <div className='uk-panel'>
            <video src={video} alt="" autoplay="true" loop muted className='video' />
            </div>
            <div>
            <h1 className='he1'>PTW LAB</h1>
            </div>
    <div className= "uk-section uk-grid">
        <div className="uk-width-1-6@m uk-width@s">
        <img src={art} alt="" className='im' />
        <h5 className='imt'>Art Production</h5>
        </div>
        <div className="uk-width-1-6@m uk-width@s">
            <img src={game} alt="" className='im' />
            <h5 className='imt'>Game Development</h5>
            </div>
            <div className="uk-width-1-6@m uk-width@s">
            <img src={quality} alt="" className='im' />
            <h5 className='imt'>Quality Assurance</h5>
            </div>
            <div className="uk-width-1-6@m uk-width@s">
            <img src={player} alt="" className='im' />
            <h5 className='imt'>Player Support</h5>
            </div>
            <div className="uk-width-1-6@m uk-width@s">
            <img src={local} alt="" className='im' />
            <h5 className='imt'>Localization</h5>
            </div>
            <div className="uk-width-1-6@m uk-width@s">
            <img src={localqa} alt="" className='im' />
            <h5 className='imt'>Localization QA</h5>
            </div>
            <div className="uk-width-1-2@m uk-width@s">
            <img src={voice} alt="" className='im1' />
            <h5 className='imt1'>Voice Production</h5>
            </div>
            <div className="uk-width-1-2@m uk-width@s">
            <img src={data1} alt="" className='im2' />
            <h5 className='imt2'>Data Collection</h5>
            </div>
</div>  
        <div>
            <img src={bod} alt='' className='blkimg' />
        </div>

    <div >
        <br/>
        <img src={border} alt='' className='borde' />
        <img src={img01} alt='' className='bimg'/>
        <h1 className='rbtn'>Continous<br/>Localization</h1>
        <button className='rebtn'>Read More &#62;&#62;&#62; </button>
        </div>

    <div className="uk-section uk-grid" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300">
        <div className="uk-width-1-2@m uk-width@s" >
            <br/><br/><br/>
                <img src={bord} alt='' class='bor' />
                <img src={img1} alt='' class='bo' />
                <h3 className='btex'>Player Feedback</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
        <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img2} alt='' class='bo' />
                <h3 className='btext'>So, You Want To<br/>Port Your Game</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img3} alt='' class='bo' />
                <h3 className='be'>Bussiness<br/>Transformation During The Panademic</h3>

        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img4} alt='' class='bo' />
                <h3 className='be'>The Role Of<br/>Innovation In Player Support</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img5} alt='' class='bo' />
                <h3 className='be'>Meet The Team:<br/>Timothy White</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img6} alt='' class='bo' />
                <h3 className='be'>What Is Text-To-<br/>Speech?</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img7} alt='' class='bo' />
                <h3 className='be'>Meet The Team:<br/>Machiko Kida</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img8} alt='' class='bo' />
                <h3 className='be'>Meet The Team:<br/>Alexander Stepanchikov</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img9} alt='' class='bo' />
                <h3 className='be'>Inside The Day <br/>To Day Of Localization QA</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img10} alt='' class='bo' />
                <h3 className='be'>Using Machine<br/> Learning In Performance Testing</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img11} alt='' class='bo' />
                <h3 className='be'>Localization<br/> Strategy For Emerging Markets | PTW</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img12} alt='' class='bo' />
                <h3 className='be'>Get To know<br/>Michael And Maxim of 1518</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img13} alt='' class='bo' />
                <h3 className='btex'>Gateway To China</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img14} alt='' class='bo' />
                <h3 className='be'>How The <br/>Perception AndExecution Of Early Access Games Has Changed (2013 - 2020)</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img15} alt='' class='bo' />
                <h3 className='be'>How To<br/> Automate QA Testing</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img16} alt='' class='bo' />
                <h3 className='be'>Every Question<br/>You Need To Ask Before Localizing A Game</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img17} alt='' class='bo' />
                <h3 className='be'>The Non- <br/>Technical Guide To Remarkable Player Support</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img18} alt='' class='bo' />
                <h3 className='be'>How To Build A <br/>Video Game Localization Strategy In 5 Steps</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img19} alt='' class='bo'/>
                <h3 className='be'>4 Outsourcing<br/> Lessons From AGames Audio Pro</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img20} alt='' class='bo' />
                <h3 className='be'>Is Player Support<br/>Hurting Your Games?</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img21} alt='' class='bo' />
                <h3 className='be'>Mobile Games -<br/>Small Devices, Big Challenges</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img22} alt='' class='bo' />
                <h3 className='be'>The Elearning<br/>Opportunities Are Noving Fast. Are You Ready?</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img23} alt='' class='bo' />
                <h3 className='be'>A Guide To<br/>Launching Your Titles In Asia</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img24} alt='' class='bo' />
                <h3 className='be'>Testing In A<br/> World Without End: How To Get RPGs Ready For Release</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img25} alt='' class='bo' />
                <h3 className='be'>Integrated CX<br/> And QA: Driving Engagement By Uniting Teams</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img26} alt='' class='bo' />
                <h3 className='be'>How PTW <br/>Helped A Global Business Integrate Their Processes, To Increase Productivity, Boost Overall...</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img27} alt='' class='bo' />
                <h3 className='be'>How PTW's<br/> Quality Assurance Services Helped A Top Elearning Provider Resove Post-Acquisition...</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img28} alt='' class='bo' />
                <h3 className='be'>How PTW<br/>Introduced Automation Testing For An Online Games Company, With Winning Results </h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img29} alt='' class='bo' />
                <h3 className='be'>Creating <br/> Authentic Cries Of War</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img32} alt='' class='bo' />
                <h3 className='be'>5 Reasons To<br/>Consider Localization</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img33} alt='' class='bo' />
                <h3 className='be'>Pole To Win<br/>Embraces Virtual Reality Quality Assurance</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img34} alt='' class='bo' />
                <h3 className='be'>How Virtual<br/> Reality Has Changed The Games Testing Environment</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img35} alt='' class='bo' />
                <h3 className='be'>Speaking Your<br/>Customer's Lamnguage</h3>  
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img36} alt='' class='bo' />
                <h3 className='be'>How PTW <br/>Helped A Leading Client Connect With Their Customers On Social Media</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img37} alt='' class='bo' />
                <h3 className='be'>Revolutionizing<br/>Customer Interactions Through Vitual And Augmented Reality</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class='bor'/>
                <img src={img38} alt='' class='bo' />
                <h3 className='be'>How Deep<br/>Domain Knowledge Can Build Strong Customer Relationships</h3>
                <br/><br/><br/>
        </div>

    </div>

</div>



    )
}
export default Lab;
