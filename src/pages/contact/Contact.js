import react from 'react';
import './Contact.css';
import CountUp from 'react-countup';
import cbg from '../../assets/images/contactbg_1.png';
import win from '../../assets/images/winston-wong.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MapContainer, TileLayer, LayerGroup, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';




function Contact() {

  const position = [50, 0]
  const RedOptions = { Color: 'red' }

    return(
  
        <div>
         
            <div>
                <img src={cbg} alt="" class='cb'/>
            </div>

            <div className='uk-card'>
              <form class='cards'>
                <div>
                <h4 class='con'>CONTACT US</h4>
                <h5 class='cont'>We'd love to hear from you; drop us a line if you have any queries.</h5>
                </div>
                <div>
                  <label className='fir'>First Name</label>
                  <input type='text' required className='firl'/>
                </div>
                <div>
                  <label className='sec'>Second Name</label>
                  <input type='text' required className='secl' />
                </div>
                <div>
                  <label className='firt'>Email Address</label>
                  <input type='email' required className='firl'/>
                </div>
                <div>
                  <label className='sect'>Telephone</label>
                  <input type='tel' required className='secl'/>
                </div>
                <div>
                  <label className='firt'>Where did you hear about us?</label>
                  <select required className='opt' >
                    <option value="client">Client Inroduction</option>
                    <option value="email">Email</option>
                    <option value="exhibt">Exhibition</option>
                    <option value="google">Google Search</option>
                    <option value="link">Linkedin</option>
                    <option value="net">Networking</option>
                    <option value="reffer">Refferal</option>
                    <option value="twit">Twitter</option>
                    <option value="word">Word of Mouth</option>
                    <option value="you">Youtube - Saw an ad!</option>
                  </select>
                </div>
                <div>
                  <label className='sect'>Enter Captcha</label>
                  <input type='text' required className='secl' />
                </div>
                <div>
                  <label className='firt'>Message</label>
                  <textarea required className='msgl' />
                </div>
                <div>
                  <button className='sbtn'>Submit</button>
                </div>
              </form>
            </div>



            <div className='loc'>LOCATIONS</div>
            <div className='line'>-</div>

            <div className='mp'>
            
          <MapContainer center={position} zoom={2} scrollWheelZoom={false}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
      <LayerGroup>
      <CircleMarker center={[55.864239,-4.251806]} pathOptions={RedOptions} radius={3} >
      <Tooltip direction="top" offset={[0, -5]}  permanent>
        Glasgow
      </Tooltip>
      </CircleMarker>
      <CircleMarker center={[45.501690,-73.567253]} pathOptions={RedOptions} radius={3} >
      <Tooltip direction="top" offset={[0, -5]}  permanent>
        Montreal
      </Tooltip>
      </CircleMarker>
      <CircleMarker center={[37.774929,-122.419418]} pathOptions={RedOptions} radius={3} >
      <Tooltip direction="top" offset={[0, -5]}  permanent>
        San Francisco
      </Tooltip>
      </CircleMarker>
      <CircleMarker center={[34.052235,-118.243683]} pathOptions={RedOptions} radius={3} >
      <Tooltip direction="bottom" offset={[0, 5]}  permanent>
        Los Angeles <br/> SIDE
      </Tooltip>
      </CircleMarker>
      <CircleMarker center={[51.481382,-0.175781]} pathOptions={RedOptions} radius={3} >
      <Tooltip direction="bottom" offset={[0, 5]}  permanent>
        London | Tileyard<br/> PTW | SIDE
      </Tooltip>
      </CircleMarker>
      <CircleMarker center={[44.436141,26.102720]} pathOptions={RedOptions} radius={3} >
      <Tooltip direction="right" offset={[5, 0]}  permanent>
        Bucharest
      </Tooltip>
      </CircleMarker>
      <CircleMarker center={[17.360589,78.474061]} pathOptions={RedOptions} radius={3} >
      <Tooltip direction="top" offset={[0, -5]}  permanent>
        Hyderabad
      </Tooltip>
      </CircleMarker>
      <CircleMarker center={[12.976793,77.590082]} pathOptions={RedOptions} radius={3} >
      <Tooltip direction="left" offset={[-5, 0]}  permanent>
        Bengaluru
      </Tooltip>
      </CircleMarker>
      <CircleMarker center={[31.225298,121.489049]} pathOptions={RedOptions} radius={3} >
      <Tooltip direction="left" offset={[0, 0]}  permanent>
        Shanghai <br/> PTW | SIDE
      </Tooltip>
      </CircleMarker>
      <CircleMarker center={[1.357107,103.819499]} pathOptions={RedOptions} radius={3} >
      <Tooltip direction="bottom" offset={[0, 5]}  permanent>
        Singapore
      </Tooltip>
      </CircleMarker>
      <CircleMarker center={[3.151696,101.694237]} pathOptions={RedOptions} radius={3} >
      <Tooltip direction="top" offset={[0, -5]}  permanent>
        Kuala Lumpur
      </Tooltip>
      </CircleMarker>
      <CircleMarker center={[25.085338,121.5645247]} pathOptions={RedOptions} radius={3} >
      <Tooltip direction="right" offset={[5, 0]}  permanent>
        Taipei
      </Tooltip>
      </CircleMarker>
      <CircleMarker center={[36.5748441,139.239417]} pathOptions={RedOptions} radius={3} >
      <Tooltip direction="right" offset={[5, 0]}  permanent>
        Japan
      </Tooltip>
      </CircleMarker>
      <CircleMarker center={[37.5666791,126.978291]} pathOptions={RedOptions} radius={3} >
      <Tooltip direction="top" offset={[0, -5]}  permanent>
        Seoul | Naju
      </Tooltip>
      </CircleMarker>
      </LayerGroup>
</MapContainer>
</div>

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
                            <p className='heading'><CountUp start={0} end={1000} duration={3}/>+</p>
                            <h4>Products</h4>
                        </div>
                        <div>
                            <p className='heading'><CountUp start={0} end={60} duration={3}/>+</p>
                            <h4>Awards For Clients</h4>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <div className='ac'>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><div className='accord'>ASIA</div></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='uk-grid'>
              <div className='uk-width-1-3@m uk-width@s'>
          <h3 className='txh'><span uk-icon="location" className='txi'></span>&nbsp;&nbsp;Shanghai</h3>
              <p className='txp'>PTW | SIDE Shanghai<br/>A505 Satisfied Star Space<br/>1398 Jiangchang Road, Jing an<br/>Shanghai 200072 PRC <a href="#" className='txa'>www.side.com</a></p>
              
              </div>
              <div className='uk-width-1-3@m uk-width@s'>
              <h3 className='txh'><span uk-icon="location" className='txi'></span>&nbsp;&nbsp;Seoul</h3>
              <p className='txp'>PTW Seoul<br/>Suite 110, Happytree &#38;<br/>207, Cheonggyesan-ro,<br/>Seocho-gu, Seoul #06802</p>
              </div>
              <div className='uk-width-1-3@m uk-width@s'>
              <h3 className='txh'><span uk-icon="location" className='txi'></span>&nbsp;&nbsp;Naju</h3>
              <p className='txp'>PTW Naju<br/>2F Ra-dong<br/>10 Ujeong-ro<br/>Naju-si, Jeollanam-do, #58322</p>
              </div>
              <div className='uk-width-1-3@m uk-width@s'>
                  <br/>
              <h3 className='txth'><span uk-icon="location" className='txh'></span>&nbsp;&nbsp;Singapore</h3>
              <p className='txtp'>PTW Singapore<br/>745 Lorong 5 Toa Payoh<br/>The Actuary, #03-02<br/>Singapore 319455</p>
              </div>
              <div className='uk-width-1-3@m uk-width@s'>
                  <br/>
              <h3 className='txth'><span uk-icon="location" className='txh'></span>&nbsp;&nbsp;Kuala Lumpur</h3>
              <p className='txtp'>PTW Kuala Lumpur<br/>Unit No 2-1, Level 2, Tower 3<br/>Avenue 3, Bangsar South No 8, Jalan Kerinchi<br/>Kuala Lumpur 59200</p>
              </div>
              <div className='uk-width-1-3@m uk-width@s'>
                  <br/>
              <h3 className='txth'><span uk-icon="location" className='txh'></span>&nbsp;&nbsp;Bangalore</h3>
              <p className='txtp'>PTW Bangalore<br/>Third Floor, Tower B,<br/>AMR Tech Park 3,<br/>Hongasandra Village,<br/>Bommanahalli, Hosur Road,<br/>Bangalore, Karnataka 560068</p>
              </div>
              <div className='uk-width-1-3@m uk-width@s'>
                  <br/>
              <h3 className='txth'><span uk-icon="location" className='txh'></span>&nbsp;&nbsp;Hyderabad</h3>
              <p className='txtp'>PTW Hyderabad<br/>PTWI Pvt Ltd, 6th Floor,<br/>B Wing,<br/>Smartworks - Purva Summit,<br/>White Fields Hi-Tech City,<br/>Madhapur,<br/>Hyderabad,<br/>Telangana 500081</p>
              </div>
              <div className='uk-width-1-3@m uk-width@s'>
                  <br/>
              <h3 className='txth'><span uk-icon="location" className='txh'></span>&nbsp;&nbsp;Taipei</h3>
              <p className='txtp'>PTW Taipei<br/>4F, No.25, Sec.1, Dunhua South Road,<br/>Songshan District,<br/>Taipei 105</p>
              </div>

              <div className='uk-width-1-3@m uk-width@s'>
              <br/>
              </div> 

                  <div className='uk-width-1-3@m uk-width@s'>
                    <br/>
              <h3 className='txth'><span uk-icon="location" className='txh'></span>&nbsp;&nbsp;Japan</h3>
              <p className='txtp'>PTW JAPAN<br/>14th Floor,<br/>Shinjuku NS Building, 2-4-1,<br/>Nishi-Shinjuku, Shinjuku-ku,<br/>Tokyo 163-0814, Japan</p>
              </div>
              <div className='uk-width-1-3@m uk-width@s'>
                  <br/>
              <h3 className='txth'><span uk-icon="location" className='txh'></span>&nbsp;&nbsp;Tokyo</h3>
              <p className='txtp'>Entalize<br/>MSB-21 Minami-otsuka Building, 2-37-5,<br/>Minami-otsuka, Toshima-ku,<br/>Tokyo, Japan <a href="#" className='txa'>www.entalize.co.jp</a></p>
              
              </div>
              <div className='uk-width-1-3@m uk-width@s'>
              <img src={win} className='wint'/>
              </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><div className='accord'>NORTH AMERICA</div></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='uk-grid'>
          <div className='uk-width-1-3@m uk-width@s'>  
          <h3 className='txh'><span uk-icon="location" className='txh'></span>&nbsp;&nbsp;San Francisco</h3>
              <p className='txp'>PTW San Francisco<br/>125 E. Sir Francis Drake Blvd<br/>Suite 401, Larkspur<br/>CA 94939</p>
              </div>  
             <div className='uk-width-1-3@m uk-width@s'>
                  <h3 className='txh'><span uk-icon="location" className='txh'></span>&nbsp;&nbsp;Los Angeles</h3>
              <p className='txp'>SIDE LA<br/>1042 Princeton Drive<br/>Suite B<br/>Marina Del Rey<br/>Los Angeles, CA 90292 <a href="#" className='txa'>www.side.com</a></p>
              </div>
              <div className='uk-width-1-3@m uk-width@s'>
                  <h3 className='txh'><span uk-icon="location" className='txh'></span>&nbsp;&nbsp;Montreal</h3>
              <p className='txp'>PTW Montreal<br/>5455 Avenue de Gaspe, Suite #315<br/>Montreal, Quebec<br/>H2T 3B3</p>
              </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography><div className='accord'>EUROPE</div></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='uk-grid'>
          <div className='uk-width-1-3@m uk-width@s'>
              <h3 className='txh'><span uk-icon="location" className='txh'></span>&nbsp;&nbsp;Glasgow</h3>
              <p className='txp'>PTW Glasgow<br/>9th Floor, Skypark 1<br/>8 Elliot Place, Glasgow<br/>G3 8EP</p>
              </div>
            <div className='uk-width-1-3@m uk-width@s'>
                <h3 className='txh'><span uk-icon="location" className='txh'></span>&nbsp;&nbsp;London</h3>
                <p className='txp'>PTW London<br/>Second Floor, Vantage London<br/>Great West Road, Brentford<br/>TW8 9AG</p>
                </div>
            <div className='uk-width-1-3@m uk-width@s'>
                <h3 className='txh'><span uk-icon="location" className='txh'></span>&nbsp;&nbsp;London</h3>
                <p className='txp'>PTW | SIDE London<br/>Unit A12<br/>Tileyard London<br/>105 Blundell Street - King's Cross<br/>London N7 9BN <br/><a href="https://www.sideglobal.com/" className='txa'>www.side.com</a></p>
               </div>
               <div className='uk-width-1-3@m uk-width@s'>
                <h3 className='txh'><span uk-icon="location" className='txh'></span>&nbsp;&nbsp;Bucharest</h3>
                <p className='txp'>PTW Bucharest<br/>26Z Timisoara Blvd., Anchor Plaza<br/>12th Floor, District 6<br/>Bucharest 061331</p>
               </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>


        </div>

)
}
export default Contact;