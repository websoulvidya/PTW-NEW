import React from 'react';
import './About.css'
import img3 from './ourvalues.png'
import img8 from './g1.png'
import img9 from './g2.png'
import img10 from './g3.png'
import img11 from './g4.png'
import img12 from './g6.png'
import img13 from './g5.png'
import CountUp from 'react-countup'
import Aos from 'aos';
import { useEffect } from 'react';
function About() {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <div>
            <section data-aos="fade-up">
                    <video className='mainBgVideo' preload="true" playsInline autoPlay muted loop>
                    <source src="https://d323sccto6ke4l.cloudfront.net/videos/web/aboutus.mp4" type="video/mp4"></source>
                    </video>
                <div className='wrap1'>
                    <div data-aos="fade-up">
                        <p>GET TO KNOW US</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='wrapper2'>
                 <p className='uk-animation-slide-bottom'  data-aos="fade-up">WHO ARE WE <span className='color'  data-aos="fade-up">COMPANY PROFILE</span></p>
                </div>
                <div className='horizontal'>
            
                </div>
                <div className='wrapper3' data-aos="fade-up">
                  <p className='uk-animation-slide-bottom' data-aos="fade-up">We’re a global team of passionate, hard-working, ambitious gamers, whose goal is to make every gamer's experience as perfect as possible. We’re dedicated to helping your players, because they’re part of our community too. We’ve been working hard for players, clients, and the games industry for nearly three decades, providing industry-leading services to every part of the globe.</p> 
                </div>
                <div className='wrapper4' data-aos="fade-up">
                  <p className='uk-animation-slide-bottom'>We believe great work gets done by teams who love what they do. This is why we approach every solution with an all-minds-on-deck strategy that leverages our global workforce's strength, creativity, and passion.</p> 
                </div>
            </section>
            <section>
                <div className='wrapper5'>
                <div className='AllCounters'>
                    <div className='kkk'>
                        <div>
                            <p className='heading'><CountUp start={0} end={35} duration={3}/>+</p>
                            <h4>Studios</h4>
                        </div>
                        <div>
                            <p className='heading'><CountUp start={0} end={26} duration={3}/> Years</p>
                            <h4>Experience</h4>
                        </div>
                    </div>
                    <div className='kkk'>
                        <div>
                            <p className='heading'><CountUp start={0} end={1000} duration={4}/>+</p>
                            <h4>Products</h4>
                        </div>
                        <div>
                            <p className='heading'><CountUp start={0} end={60} duration={4}/>+</p>
                            <h4>Awards For Clients</h4>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section>
                <div className='wrapper6' data-aos="fade-up">
                    <p className='uk-animation-slide-bottom'>OUR CORE VALUES</p>
                </div>
                <div className='horizontal'>
            
                </div>
            </section>
            <section>
                <div className='wrapper7'>
                    <div className='f1' data-aos="fade-up">
                        <h5>QUESTION EVERYTHING</h5>
                        <p>Think laterally, come up with creative solutions and innovate.Challenge the status quo and change the norm.</p>
                        <h5>BE FEARLESS</h5>
                        <p>Take calculated risks, even if it means failing, and then try again.Know your worth and that you have value.</p>
                        <h5>WE'RE STRONGER TOGETHER</h5>
                        <p>Look out for one another.Empower others to help them grow and be their best self. Communicate with honesty, transparency, and respect.</p>
                        <h5>GET IT DONE</h5>
                        <p>Once we come up with something brilliant, we like to run as fast as we can to get it done.</p>
                    </div>
                    <div className='vertical'>

                    </div>
                    <div className='f2'>
                        <img className='' data-aos="zoom-in-up" src={img3} alt='monk'  />
                    </div>
                </div>
            </section>
            <section>
                <div className='wrapper8' data-aos="fade-up">
                    <p className='uk-animation-scale-down'>THE CREW</p>
                </div>
                <div className='horizontal'>
            
                </div>
            </section>
            <section>
                {/* <div className={classes.wrapper9}>
                    <div>
                        <div><p>Teppei Tachibana</p></div>
                        <div className={classes.image_box}><img src={img8} alt="team_member" /></div>
                    </div>
                    <div>
                        <div><p>Deborah Kirkham</p></div>
                        <div className={classes.image_box}><img src={img9} alt="team_member" /></div>
                    </div>
                    <div>
                        <div><p>Steve Moseley</p></div>
                        <div className={classes.image_box}><img src={img10} alt="team_member" /></div>
                    </div>
                </div>
                <div className={classes.wrapper10}>
                    <div>
                        <div><p>Masaru ‘Mikey’ Harada</p></div>
                        <div className={classes.image_box}><img src={img11} alt="team_member" /></div>
                    </div>
                    <div>
                        <div><p>Andy Emery</p></div>
                        <div className={classes.image_box}><img src={img12} alt="team_member" /></div>
                    </div>
                    <div>
                        <div><p>Kasturi Rangan</p></div>
                        <div className={classes.image_box}><img src={img13} alt="team_member" /></div>
                    </div>
                </div> */}

                <div className='wrapper9'>
                    <div><h3>Teppi Tachilbana</h3>
                    <div className='image_box'>
                        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                            <img src={img8} alt=""></img>
                            <div class="uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
                                <p> <h3>Teppi Tachilbana</h3> <br /> As Chairman of PTW. Teppei Tachibana is recognized as a diplomatic and trustworthy leader who has unwavering loyalty to our heritage, culture, and values. Teppei became President and CEO of Pole To Win America, Inc. in 2009 when Pole To Win opened its first overseas studio. <br />
                                
                                Now in the role of Chairman of PTW, and President and CEO of PTW's parent company, Poletowin Pitcrew Holdings Inc., Teppei oversees a successful global enterprise that has grown from a single studio in one country to 35 studios across 11 countries, with all overseas studios under a single holding company.  
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div><h3>Deborah Kirkham</h3>
                    <div className='image_box'>
                        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                            <img src={img9} alt=""></img>
                            <div class="uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
                                <p>
                                <h3>Deborah Kirkham</h3><br />
                                As CEO of PTW and a board member of PPHD, Deborah Kirkham is committed to leading transformative change while achieving demanding financial and operational goals. Deborah has been with PTW for over a decade. Under her leadership, PTW has grown to nearly 8,500 employees. In her role as President and COO, the company celebrated double-digit growth year-on-year. Deborah’s infectious love of her company has built a company culture centered around loyalty, speed, and growth, and has allowed her to lead a high-performing team that is laser-focused on accelerating innovation worldwide.  
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div><h3>Steve Moseley</h3>
                    <div className='image_box'>
                        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                            <img  src={img10} alt=""></img>
                            <div class="uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
                                <p>
                                <h3>Steve Moseley</h3><br />
                                With extensive cross-functional and multinational experience, Steve Moseley brings a unique perspective to the CFO role at Pole to Win International.
                                Steve is a highly effective hands-on leader with over 20 years’ experience in Finance, M&A, Legal, Operations, Sales, Technology, and Administration. Steve has proven ability to conceptualize and implement vision through collaboration and alignment of all stakeholders to drive profitable results.  
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className='wrapper10'>
                    <div><h3>Masaru ‘Mikey’ Harada</h3>
                    <div className='image_box'>
                        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                            <img  src={img11} alt=""></img>
                            <div class="uk-transition-fade uk-position-cover  uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
                                <p>
                                <h3>Masaru ‘Mikey’ Harada</h3>
                                Mikey Harada joined Pole To Win in 2009 as Head of the Global Business Division and was responsible for the company’s global expansion. <br />
                                He played a key role in setting up subsidiaries and acquisitions as part of the development of Pole To Win International. As Chief Liaison Officer, Mikey develops strategies to utilize synergies across all PTW group companies, creating added value for clients. He is a valued knowledge resource on culture, business, law, and finance, with over 30 years’ experience in marketing, management, and international business development.      
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div><h3>Andy Emery</h3>
                    <div className='image_box'>
                        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                            <img src={img12} alt=""></img>
                            <div class="uk-transition-fade uk-position-cover  uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
                                <p>
                                <h3>Andy Emery</h3>
                                As COO, Andy brings a proven track record of driving operational success within complex international organizations, building strong cross-cultural teams, and helping companies achieve their full potential through strategic focus and operational improvement. Prior to joining PTW in 2015, he gained considerable experience in the interactive entertainment sector, co-founding and building SIDE into Europe’s leading provider of videogame audio services and winning multiple Industry Excellence Awards along the way. Post-acquisition, Andy played a key role in SIDE’s integration into the PTW group, launching SIDE Shanghai in 2016 and SIDE LA in 2017.  <br />
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div><h3>Kasturi Rangan</h3>
                    <div className='image_box'>
                        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                            <img src={img13} alt=""></img>
                            <div class="uk-transition-fade uk-position-cover  uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
                                <p>
                                <h3>Kasturi Rangan</h3>  
                                Our Chief Product Officer, Kasturi Rangan is our visionary of the future and our evangelist for great products. <br />
                                Rangan is an industry veteran and has been with PTW for over a decade, significantly growing and leading operations across the Quality Assurance, Innovation, and Customer Experience lines of business. In his most recent role at PTW, Rangan was the Regional President over North American and India operations. He was also recently appointed as the CEO of PTW’s game and product development brand, 1518. In his role as CPO of PTW, Rangan oversees the product innovation and transformation arm for PTW globally.  
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default About