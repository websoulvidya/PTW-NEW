import react from 'react';
import './Localqa.css';

import Video from "./localqa.mp4";
import HeaderIcon from "../../../assets/images/localizatonqaheardericon.png";
import HeaderIconMobile from "../../../assets/images/localizatonqaheardericon_b.png";
import Linguistcertficate from "../../../assets/images/linguisticcertification.png";
import Linguistictest from "../../../assets/images/linguistictesting.png";
//import all components here

import LocalQA  from './LocalizationQA';
import LocalQACertificate from './LocalQACertificate';
import LocalQACounter from './LocalQACounter';
import LocalQaCharacter from './LocalQaCharacter';
import LOcalQAHelp from './LocalQAHelp';



function Local() {
    return(
        <div>
                  <LocalQA localQABanner ={{Video,HeaderIcon,HeaderIconMobile}}/>
      <LocalQACertificate localQaCertficatetest = {{Linguistcertficate,Linguistictest}}/>
      <LocalQACounter/>
      <LocalQaCharacter/>
      <LOcalQAHelp/>
        </div>

)
}
export default Local