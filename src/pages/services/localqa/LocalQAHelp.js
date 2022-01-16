import React from 'react'
import Texttospeech from "../../../assets/images/51.jpg";
import MachikoKidaImg from "../../../assets/images/52.jpeg";
import InsideLoclQa from "../../../assets/images/49.jpeg";


function LOcalQAHelp() {
    return (
        <div>



            <div className="uk-section container helpful-list">
                <p className="help-link">HELPFUL LINKS</p>

                <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="left: true">

                    <ul className="uk-slider-items uk-grid helpful-wrapper uk-slider-items" uk-scrollspy="cls: uk-animation-scale-up; target: .helpful-section;" uk-grid>
                        <li className="helpful-section">

                            <div className='helpful-slide'> </div>
                            <div className="helpful-imgframe  ">
                                <img src={Texttospeech} alt='' className="helpful-img " />
                            </div>
                            <div className="helpful-text">
                                <h3>What is Text-To-<br />
                                    Speech?</h3>


                            </div>
                        </li>
                        <li className="helpful-section">

                            <div className='helpful-slide'> </div>
                            <div className="helpful-imgframe  ">
                                <img src={MachikoKidaImg} alt='' className="helpful-img " />
                            </div>
                            <div className="helpful-text">
                                <h3>Meet The Team:<br />
                                    Machiko Kida</h3>


                            </div>
                        </li>
                        <li className="helpful-section" >

                            <div className='helpful-slide'> </div>
                            <div className="helpful-imgframe  ">
                                <img src={InsideLoclQa} alt='' className="helpful-img " />
                            </div>
                            <div className="helpful-text">
                                <h3>Inside The Day To Day<br />
                                    Of Localization QA</h3>

                            </div>

                        </li>

                    </ul>



                </div>

            </div>

            <div className="uk-section">
                <div className="read-more" uk-scrollspy="cls: uk-animation-slide-left; repeat: true" >
                    <p>Read More</p>

                    <div className="helpbtn-arrows">
                        <i className="fal fa-angle-right"></i>
                        <i className="fal fa-angle-right"></i>
                        <i className="fal fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LOcalQAHelp









