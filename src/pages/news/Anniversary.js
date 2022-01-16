import React from "react";
import AnniversaryPic from "../../assets/images/113.jpg";
import GStar from "../../assets/images/109.jpg";
import IGDCGame from "../../assets/images/111.jpg";
import PTWSponsers from "../../assets/images/105.jpeg";


function Anniversary() {
    return (
        <div>

            <div className="uk-section container anniversary-list">
                <div className="uk-grid uk-margin-left uk-margin-top-large" uk-grid>

                    <div className="uk-width-*  uk-width-2-3@m  anniversary-section   uk-animation-scale-up ">
                        <div className="anniversary-slide"> </div>
                            <div className="anniversary-imgframe">
                                <img src={AnniversaryPic} style={{zIndex:"1"}} alt='' className="anniversary-img " />
                            </div>
                            <div className="anniversary-text">
                                <p> The Game Dev Show <br/>Second Season Airing... </p>
                            </div>
                        
                         <div className="anniversary-more">
                             <p>Read More</p>
                          
                             <div className="btn-arrows">
                             <i class="fal fa-angle-right"></i>
                             <i class="fal fa-angle-right"></i>
                            <i class="fal fa-angle-right"></i>
                            </div>
                            </div>
                         </div>
                   


                    <div className="uk-width-1-3@l no-padding-sm  uk-width-*">
                        <div className="right-event-heading uk-margin-bottom">
                            <h4 className="uk-text-bold right-event-name">EVENTS</h4>
                        </div>

                        <div className="right-events-section">
                            <div className="uk-width right-eventslist uk-animation-scale-up">
                                <div className="rightevent-slide"></div>
                                <div className="rightevent-image">
                                    <img src={GStar} alt='' className="" />
                                </div>
                                <div className="rightevent-text">
                                    <h4 className="uk-text-bold">G-star 2021<br />
                                        <span className="uk-text-muted uk-text-small uk-text-noraml">17-19 November 2021</span></h4>
                                </div>
                            </div>

                            <div className="uk-width right-eventslist uk-animation-scale-up ">
                            <div className="rightevent-slide"></div>
                                <div className="rightevent-image">
                                    <img src={IGDCGame} alt='' className="" />
                                </div>
                                <div className="rightevent-text">
                                    <h4 className="uk-text-bold">IGDC 2021<br />
                                        <span className="uk-text-muted uk-text-small uk-text-noraml">November 16,2021</span></h4>
                                </div>
                            </div>

                            <div className="uk-width  right-eventslist uk-animation-scale-up">
                            <div className="rightevent-slide"></div>
                                <div className="rightevent-image">
                                    <img src={PTWSponsers} alt='' className="" />
                                </div>
                                <div className="rightevent-text">
                                    <h4 className="uk-text-bold">PTW Sponsors A Develop: St...<br />
                                        <span className="uk-text-muted uk-text-small uk-text-noraml">17-19 November 2021</span></h4>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </div>










        </div>

        
    )
}

export default Anniversary
