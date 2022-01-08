import './Careers.css'
import TableData from './TableData.json'
import {useState} from 'react'
import img1 from './deborahbike.png'
import img3 from './64.jpg'
import img4 from './65.jpg'
import img5 from './63.jpg'
import CountUp from 'react-countup'
import { useEffect } from 'react';
import Aos from 'aos';
function Careers() {
    const [searchTerm, setsearchTerm]=useState("");
    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);
    return(
        <div>
            <section data-aos="fade-up">
                    <video className='mainBgVideo' preload="true" playsInline autoPlay muted loop>
                        <source src="https://d323sccto6ke4l.cloudfront.net/videos/web/careers.mp4" type="video/mp4"></source>
                    </video>
               <div className='wrapper1'>
                    <div>
                        <p>JOIN OUR</p>
                        <p className='p1'>SQUAD</p>
                    </div>
                </div> 
            </section>
            <section className='s1' data-aos="fade-up">
                <div className='contain'>
                    <div className='k1'>
                        <input type="text" onChange={(e)=>{setsearchTerm(e.target.value)}}></input><span>SEARCH&gt;</span>
                    </div>
                    <div className='k2'>
                        <select placeholder="Department">
                            <option value="Department">Department</option>
                            <option value="Art Production">Art Production</option>
                            <option value="Audio">Audio</option>
                            <option value="CDS">CDS</option>
                        </select>
                    </div>
                    <div className='k3'>
                        <select type="text"  placeholder="Locations">
                            <option value="Locations">Locations</option>
                            <option value="Spain">Spain</option>
                            <option value="Swden">Sweden</option>
                            <option value="Taiwan">Taiwan</option>
                            <option value="Thailand">Thailand</option>
                        </select>     
                    </div>
                </div>
            </section>
            <div className="">
            <section className='s2' data-aos="fade-up">
                <div>
                    <table uk-table className='uk-animation-scale-up'>
                        <thead>
                            <tr>
                                <th className='the1'>Open Positions</th>
                                <th className='the2'>Department</th>
                                <th className='the3'>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TableData.filter(val=>{
                                if(searchTerm===''){
                                    return val;
                                }
                                else if(val.Open_Positions.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
                                    ||val.Department.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
                                    ||val.Location.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
                                    ){
                                        return val;
                                    }
                                }).map((m)=>{
                                    return(<tr key={m.id}>
                                        <td>{m.Open_Positions}</td>
                                        <td>{m.Department}</td>
                                        <td>{m.Location}</td>
                                        </tr>)
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </section>
            </div>
            <div className="uk-animation-scale-up">
            <section className='s3' data-aos="fade-up">
                <div className='wrapperr3'>
                    <img src={img1} alt="" />
                </div>
            </section>
            </div>
            <div className="uk-animation-scale-up" data-aos="fade-up">
            <section className='s4' data-aos="fade-up">
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
            </section>
            </div> 
            <div className="uk-animation-slide-bottom-medium" data-aos="fade-up">
                <section className='s5'>
                    <h1>HELPFUL LINKS</h1>
                </section>
            </div>
            <section className='s6' data-aos="fade-up">
                <div className='cardd' id='c1'>
                    <div className='image_card'><img src={img3} alt="" /></div>
                    <div className='card_text'><h6>How to automate <br />QA Testing</h6></div>
                </div>
                <div className='cardd'>
                    <div className='image_card'><img src={img4} alt="" /></div>
                    <div className='card_text'><h6>Integrate QX and <br />CA Driving</h6></div>
                </div>
                <div className='cardd'>
                    <div className='image_card'><img src={img5} alt="" /></div>
                    <div className='card_text'><h6>Continuous<br />Localisation</h6></div>
                </div>
            </section>
            <section className='s7'>
                <div className="uk-animation-slide-left-medium"><button>Read More &#62; &#62; &#62;</button></div>
            </section>
        </div>
    );
}
export default Careers