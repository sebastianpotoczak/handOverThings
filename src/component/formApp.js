import React, { useState, useEffect } from "react";
// import MultiStep  from 'react-multistep';
import MultiStep from "./multiStep";


import {Checkbox, Radio} from 'react-btn-checkbox';

const FormApp = () => {


    const steps = [
        {name: 'StepOne', component: <FormFirst/>},
        {name: 'StepTwo', component: <FormSecond/>},
        {name: 'StepThree', component: <FormThird />},
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
              <h1>Zaznacz co chcesz oddać:</h1>
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
        
    const[bag, setBag] = useState("");
    
    const handleChange = (e) => {
        const newThings = e.target.value;
        setBag(newThings)
    }
    return(
        <>
          <div className="form_second">
          <>  
 
          <h4 className="form_steps">krok 2/4</h4>
      <div className="form_app" >
  
        <div className="Form_first"  >
            <h1>Podaj 60l worków, w które spakowałeś / aś rzeczy:</h1>
        </div>
        <div className="second_form_element">
            <h2>Liczba 60l worków</h2>
            <select value={bag} onChange={handleChange}>
                <option className="second_element" disabled value="">- wybierz -</option>
                <option className="second_element">1</option>
                <option className="second_element">2</option>
                <option className="second_element">3</option>
                <option className="second_element">4</option>
                <option className="second_element">5</option>
            </select>
        </div>
      </div>
      </>

          </div>
        
        </>
    )
}

const FormThird = () => {
  
    const[things, setThings] = useState("");
    const[people, setPeople] = useState([])
    
    const handleChange = (e) => {
        const newThings = e.target.value;
        setThings(newThings)
    }

    const handleChangeTwo = (e) => {
        const newPeople = e.target.value;
        setPeople(newPeople)
    }

    const[First, setFirst] = useState(false);
    const[Second, setSecond] = useState(false);
    const[Third, setThird] = useState(false)


  
    return(
        <>
          <div className="form_second">
          <>  
       
          <h4 className="form_steps">krok 3/4</h4>
      
      <div className="form_app" >
  
        <div className="Form_first"  >
       
        </div>
        <div>
            <h2>Lokalizacja:</h2>
            <select>
                <option>- wybierz -</option>
                <option>Poznań</option>
                <option>Warszawa</option>
                <option>Kraków</option>
                <option>Wrocław</option>
                <option>Katowice</option>
            </select>
        </div>
        <div>
            <h2>Komu chcesz pomóc?</h2>



        </div>
        <div>
            <h2>Wpisz nazwę konetnej organizacji (opcjonalnie)</h2>
            <input />
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


