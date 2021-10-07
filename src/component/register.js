import Nav from "./nav"
import tribal from '../assets/Decoration.svg'

const Register = () => {
    return(
        <>
        <div className="login">  
        <div className="content">
           
            <div className="login_contain">
            <Nav />
  
            </div>
            <div className="login_form">
                <h1>Załóż konto</h1>
                <img src={tribal} />
                <div className="register_input">
                    <div className="login_element">
                        <p>Email</p>
                       <input />
                    </div>
             
                    <div className="login_element">
                        <p>Hasło</p>
                      <input />
                    </div>


                    <div className="login_element">
                        <p>Powtórz hasło</p>
                      <input />
                    </div>
                  <div>  
                  </div>
                
  
                </div>  
                <div className="login_submit">
                  <a href="http://localhost:3000/#/login">Zaloguj się</a>   
                      <a href="#">Załóż konto</a>
  
                </div>
                     
  
              
                          
            </div>
           
            </div>
        </div>
        
  
        </>
    )
}

export default Register