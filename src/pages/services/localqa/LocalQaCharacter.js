import React from "react";

import QA from "../../../"

import LqaCharacter from  "../../../assets/images/localqacharacter.png";
import UnderstandingVision from "../../../assets/images/understanding-your-vision.png";
import RequirementGather from "../../../assets/images/requirement.png";
import TestPlan from "../../../assets/images/test-plan-creation.png";
import TestingandReporting from "../../../assets/images/testing-reporting.png";
import BugFix from "../../../assets/images/bug-fix-verification.png";
import OngoingQuality from "../../../assets/images/ongoing-quality-analysis.png";
import FinalReport from "../../../assets/images/final-report.png";

function LocalQaCharacter() {

    return (
        <div>
            <div className="uk-section collab-sect ">
                <div className="uk-animation-toggle" tabindex="0">
                    <h2 className="uk-text-center uk-text-bold collab-title uk-animation-slide-bottom">HOW WILL WE COLLABORATE WITH YOU?</h2>
                    <p className="collab-content uk-animation-slide-bottom">Our solutions and partnerships are always bespoke. For Localization QA, that means we view our role as a partnership.
                        Timelines and expectations will change on the client side, and our role is to meet them quickly and comprehensively.</p>
                </div>

                <div className="uk-grid ">
                    <div className="uk-width-1-2@s">
                        <div className="character-left uk-animation-toggle">
                        
                            <div className="uk-animation-slide-bottom">
                                <img src={UnderstandingVision} alt="" />
                                <h3>Understanding Your Vision</h3>
                            </div>

                            <div className="uk-animation-slide-bottom">
                                <img src={RequirementGather} alt="" />
                                <h3>Requirement Gathering</h3>
                            </div>

                            <div className="uk-animation-slide-bottom">
                                <img src={TestPlan} alt="" />
                                <h3>Test Plan Creation</h3>
                            </div>

                            <div className="uk-animation-slide-bottom">
                                <img src={TestingandReporting} alt="" />
                                <h3>Testing and Reporting</h3>
                            </div>

                            <div className="uk-animation-slide-bottom">
                                <img src={BugFix} alt="" />
                                <h3>Bug Fix Verification</h3>
                            </div>

                            <div className="uk-animation-slide-bottom">
                                <img src={OngoingQuality} alt="" />
                                <h3>Ongoing Quality Analysis</h3>
                            </div>

                            <div className="uk-animation-slide-bottom">
                                <img src={FinalReport} alt="" />
                                <h3>Final Report</h3>
                            </div>
                            
                        </div>
                    </div>

                    <div className="uk-width-1-2@s localcharimage">
                        <img src={LqaCharacter} alt='' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LocalQaCharacter

