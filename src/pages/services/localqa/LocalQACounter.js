import React from 'react';
import Countup from 'react-countup';


function LocalQACounter() {
    return (
        <div>
                 <div className="ling-patch container">
                <div className="uk-width-1-4@m uk-width-1-2">
                   <h1 className='uk-text-bold'>
                    <Countup start={1000} end ={2500} duration={5}/>+</h1> 
                    <p className="uk-text-bold">LQA Titles</p>
                </div>
                <div className="uk-width-1-4@m uk-width-1-2">
                <h1 className='uk-text-bold'> <Countup  end ={45} duration={5}/></h1>
                    <p className="uk-text-bold">Languages</p>
                </div>
                <div className="uk-width-1-4@m uk-width-1-2">
                <h1 className='uk-text-bold'><Countup  end ={20} duration={5}/>+ Yrs</h1>
                    <p className="uk-text-bold">LQA Experience</p>
                </div>
                <div className="uk-width-1-4@m uk-width-1-2">
                <h1 className='uk-text-bold'><Countup  end ={650} duration={5}/>K+</h1>
                    <p className="uk-text-bold">Hrs Delivered in 2020</p>
                </div>
            </div>


       <script>

           
       </script>
        </div>
    )
}

export default LocalQACounter
