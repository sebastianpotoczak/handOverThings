import { useState, useEffect } from "react";
// import MultiStep  from 'react-multistep';
import MultiStep from "./multiStep";
import renderNav from "./multiStep";



const FormApp = () => {


    const steps = [
        {name: 'StepOne', component: <FormFirst/>},
        {name: 'StepTwo', component: <FormSecond/>},
        {name: 'StepThree', component: <FormThird/>},
        {name: 'StepFour', component: <FormFourth/>}
      ];


    return(
        <>
            <div className="Form_app">
                    <MultiStep  className="multi_step" steps={steps}/>
           </div>
        </>
    )
    

}


const FormFirst = (e) => {
    
    const[things, setThings] = useState("");
    
    const handleChange = (e) => {
        const newThings = e.target.value;
        setThings(newThings)
    }

    return(
        <>  
            <h4 className="form_steps">krok 1/4</h4>
        <div className="form_app" >
          
          <div className="Form_first"  >
            <div>
                <input type="radio" value="ubrania, które wprowadzają się do ponownego powrotu" name="things" onClick={handleChange} />
                <p>ubrania, które wprowadzają się do ponownego powrotu</p>
            </div>
            <div>
                <input type="radio" value="ubrania, do wyrzucenia" name="things" onChange={handleChange}/>
                <p>ubrania, do wyrzucenia</p>
            </div>
            <div>
                <input type="radio" value="zabawki" name="things" onChange={handleChange}/>
                <p>zabawki</p>
            </div>
            <div>
                <input type="radio" value="książki" name="things" onChange={handleChange}/>
                <p>książki</p>
            </div>
            <div>
                <input type="radio" value="Inne" name="things" onChange={handleChange}/>
                <p>Inne</p>
            </div>
         
          
        </div>

        </div>
        </>
    )

}
  


const FormSecond = () => {
        
    const[things, setThings] = useState("");
    
    const handleChange = (e) => {
        const newThings = e.target.value;
        setThings(newThings)
    }
    return(
        <>
          <div className="form_second">
          <>  
 
          <h4 className="form_steps">krok 2/4</h4>
      <div className="form_app" >
  
        <div className="Form_first"  >
   
        </div>
      </div>
      </>

          </div>
        
        </>
    )
}

const FormThird = () => {
    const[things, setThings] = useState("");
    
    const handleChange = (e) => {
        const newThings = e.target.value;
        setThings(newThings)
    }
    return(
        <>
          <div className="form_second">
          <>  
       
          <h4 className="form_steps">krok 3/4</h4>
      
      <div className="form_app" >
  
        <div className="Form_first"  >
         
        </div>
      </div>
      </>

          </div>
        
        </>
    )
}


const FormFourth = () => {
   const[things, setThings] = useState("");
    
    const handleChange = (e) => {
        const newThings = e.target.value;
        setThings(newThings)
    }
    return(
        <>
          <div className="form_second">
          <>  
          <h4 className="form_steps">krok 4/4</h4>
      
      <div className="form_app" >
        
        <div className="Form_first"  >

      </div>
      </div>
      </>

          </div>
        
        </>
    )
}



const FormResult = () => {
    const[things, setThings] = useState("");
    
    const handleChange = (e) => {
        const newThings = e.target.value;
        setThings(newThings)
    }
    return(
        <>
          <div className="form_second">
          <>  
       
 
      
      <div className="form_app" >
          <h4>krok 4/4</h4>
      </div>
      </>

          </div>
        
        </>
    )
}

export default FormApp
