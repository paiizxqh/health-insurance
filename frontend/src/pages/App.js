import React from 'react';
import { InsuranceForm } from './InsuranceForm';
import logo from '../image/logo.png'
import "../css/InsuranceForm.css";
import { useState } from 'react';
import Footer from './Footer';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="app-container">
    <div className='container'>
    <nav>
      <div style={{display:'flex',justifyContent:'space-between',height:60}}>
        <div style={{margin:10,marginTop:15,display:'flex',justifyContent:'flex-start',minWidth:400}}>
          <img src={logo} alt="Logo" style={{height:45,marginRight:-10}} />
          <h1 style={{color:'#373a39',padding:' 16px 14px',font:" 22px 'DBHeaventR', Arial, sans-serif",fontWeight:'bold'}}>Health Insurance Prediction</h1>
        </div>

        <div className='b-nav' style={{margin:10,marginTop:15,display:'flex',justifyContent:'flex-end',minWidth:400}}>
            <a style={{marginRight:10}} href="/" title="Health &amp; Diet" class="active">Predict</a>
        </div>
      </div>
      <hr></hr>
      </nav>

    <div className="col-12 accordion px-0" id="accordion">
      <div style={{backgroundColor:'#3ed995',borderColor:'#3ed995'}} className="card">
        <div className="card-header" id="headingIntro">
          <h2 className='h2-pop'>
            <button
              style={{display:'flex',justifyContent:'flex-start',textDecoration: 'none'}}
              className="btn btn-link"
              type="button"
              onClick={toggleAccordion}
              aria-expanded={isOpen}
              aria-controls="intro"
            >
              What is Health Insurance?
            </button>
          </h2>
        </div>
        <div id="intro" className={`collapse ${isOpen ? 'show' : ''}`} aria-labelledby="headingIntro">
          <div className="card-body">
            <p style={{color:'white',font:" 16px 'DBHeaventR', Arial, sans-serif"}}>
            It is insurance in which the insurance company 
            agrees to compensate for the medical expenses 
            incurred by the insured, whether those medical 
            expenses arise from illness or injuries due to 
            accidents.
            </p>
          </div>
        </div>
      </div>
    </div>
    

      <InsuranceForm />
      
    </div>
    <Footer />
    </div>
  );
}

export default App;