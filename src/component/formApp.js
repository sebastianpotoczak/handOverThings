import { useState, useEffect } from "react"

const FormAppView = () => {


        
    const FormFirst = () => {
    
        const[things, setThings] = useState("");
        
        const handleChange = (e) => {
            const newThings = e.target.value;
            setThings(newThings)
        }
    
        return(
            <>  
           
             <div className="form_info">
                <div className="form_info_content">
                <h1>Ważne!</h1>
                <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać..</p>
            </div>
            </div>
            
            <div className="form_app" >
                <h4>krok 1/4</h4>
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
                <a href="http://localhost:3000/#/oddaj-rzeczy">Dalej</a>
            </div>

            </div>
            </>
        )
        }





        return(
            <>
                <FormFirst />
                <FormSecond />
                <FormFourth />
                <FormThird /> 
                <FormResult />
            </>
        )
    }

  

const FormApp = () => {


    return(
        <>
       
           <FormAppView />
            
        </>
    )
    

}






   






const FormFirst = () => {

    const[things, setThings] = useState("");

    return(
        <>  
          <div className="Form_first">
            <div>

            </div>
        </div>
  

        </>
    )
}


const FormSecond = () => {
    return(
        <>
          <div className="form_second">

          </div>
        
        </>
    )
}

const FormThird = () => {
    return(
        <>
          <div className="form_third"></div>

        </>
    )
}


const FormFourth = () => {
    return(
        <>
          <div className="form_fourth"></div>

        </>
    )
}



const FormResult = () => {
    return(
        <>
  <div className="form_result"></div>
        </>
    )
}

export default FormApp
