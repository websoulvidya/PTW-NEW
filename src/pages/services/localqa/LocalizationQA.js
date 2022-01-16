import React from 'react';
import AOS from 'aos';


    AOS.init();
      
function LocalQA(props) {

    return (
        <div>
            <div className='video-wrap'>
                <div className='video-section'>
                    <video src={props.localQABanner.Video} alt="" autoPlay loop muted playsinline uk-cover />
                </div>
                <div className='video-clip-section'>

                    <img src={props.localQABanner.HeaderIcon} className='header-image' alt='' />
                    <img src={props.localQABanner.HeaderIconMobile} className='header-image2' alt=''/>

                    <div className='video-headerclip' data-aos="fade-right">
                        <div className='header-clip-text'>
                             <h1>LOcalization QA</h1>  
                             <p className='clip-text2'>PROTECT YOUR COMMUNITY FROM LANGUAGE AND CULTURE-RELATED BUGS</p>
                        </div>
                    </div>



                </div>
          
</div>
        </div>


    )
}
export default LocalQA;