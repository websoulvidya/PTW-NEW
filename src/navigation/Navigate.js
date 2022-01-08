import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../pages/home/Home';
import News from '../pages/news/News';
import Careers from '../pages/careers/Careers';
import Lab from '../pages/lab/Lab';
import Contact from '../pages/contact/Contact';
import About from '../pages/about/About';

import Art from '../pages/services/art/Art';
import Game from '../pages/services/game/Game';
import Data from '../pages/services/data/Data';
import Quality from '../pages/services/quality/Quality';
import Player from '../pages/services/player/Player';
import Localization from '../pages/services/localization/Localization';
import Local from '../pages/services/localqa/Localqa';
import Voice from '../pages/services/voice/Voice';

import { ThemeProvider } from '@mui/material/styles';
import themess from "../components/header/themess";




export default function Navigate() {
    return (
      <Router>
        
        <div>
                <ThemeProvider theme= {themess}>
                <Header/>
                </ThemeProvider>
             
        </div>


        <div>
        <Switch>
            <Route path="/" exact><Home/></Route>
            <Route path="/news"><News/></Route>
            <Route path="/careers"><Careers/></Route>
            <Route path="/lab"><Lab/></Route>
            <Route path="/contact"><Contact/></Route>
            <Route path="/about"><About /></Route>

            <Route path="/artproduction"><Art /></Route>
            <Route path="/gamedevelopment"><Game /></Route>
            <Route path="/qualityassurance"><Quality /></Route>
            <Route path="/playersupport"><Player /></Route>
            <Route path="/localization"><Localization /></Route>
            <Route path="/localizationqa"><Local /></Route>
            <Route path="/voiceproduction"><Voice /></Route>
            <Route path="/datacollection"><Data /></Route>

            </Switch>
      </div>

      
            



            <div>
            <Footer/>
            </div>

         
    </Router>
                
  );
}
