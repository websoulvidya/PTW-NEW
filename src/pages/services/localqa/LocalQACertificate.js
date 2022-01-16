import React from 'react'

function LocalQACertificate(props) {
    return (
        <div>

            <div className="uk-animation-toggle uk-container" tabindex="0">
                <div className="uk-grid uk-animation-slide-bottom ">

                    <div className="uk-width-1-2@m uk-width@s uk-text-center uk-padding ling-wrapper">

                        <img src={props.localQaCertficatetest.Linguistictest} alt=""/>
                        <p className="ling-title uk-text-bold uk-text-center">Linguistic Testing</p>
                        <p className="ling-content uk-text-center"><p>Linguistic testing verifies the accuracy of your translations in context, and confirms local and regional expectations for your product.</p>
                          <p>Our native linguists apply their expertise to the translation, culturalization and localization of text and audio-visual content for all major regions and languages.</p>
                         <p>We have global teams around the world to provide testing support in additional languages in-territory.</p> </p>
                    </div>

                    <div className="uk-width-1-2@m uk-width@s  uk-text-center uk-padding ling-wrapper">
                        <img src={props.localQaCertficatetest.Linguistcertficate} alt=""/>
                        <p className="ling-title uk-text-bold uk-text-center">Linguistic Platform Compliance Testing</p>
                        <p className="ling-content uk-text-center"> 
                        <p>Linguistic Platform Compliance testing ensures your products meet all hardware manufacturers' language content requirements, such as terminology.</p>
                        <p>We have a comprehensive library of test cases, using the latest methodologies to provide enviable first-time pass rates.</p>
                        <p>Our universal region coverage makes us the perfect partner for releasing software products in any territory and any language.</p>
                        </p>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocalQACertificate
